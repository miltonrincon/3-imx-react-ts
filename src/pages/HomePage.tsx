/*global chrome*/
import React, { useState, useEffect, useRef } from "react";
import WalletHeader from "../components/Wallet/WalletHeader";
import { useNavigate } from 'react-router-dom';
import Header from "components/Header/Header";
import Counter from "components/Counter/Counter";
import BottomAnime from "components/BottomAnime/BottomAnime";
import GrModal from "components/GrModal/GrModal";
import GrModalBody from "components/GrModal/GrModalBody/GrModalBody";
import GrModalFooter from "components/GrModal/GrModalFooter/GrModalFooter";
import { connectCoinbase, connectMetamask, isCoinbaseInstalled, isMetaMaskInstalled, signMessage } from "Integrations/Wallet";
import { getSignMessage, signinUser, signupUser } from "Integrations/AuthAPI";
import settingsConfig from "config/settingsConfig";
import { validateEmail } from "Util/ValidateEmail";

const delay = 5;

const HomePage = () => {
  let navigate = useNavigate();
  const vidRef = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(0);
  const [channelOn, setChannelOn] = useState(false);
  const [showError, setShowError] = useState({ show: false, message: "" });
  const [loadingMetamaskWallet, setLoadingMetamaskWallet] = useState(false);
  const [status, setStatus] = useState("");
  const [walletAddress, setWalletAddress] = useState<null | string>(null);
  const metamaskTimer: any = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [user, setUser] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState("");

  function nextStep(n: number) {
    setStep(n + 1);
  }



  useEffect(() => {
    async function signInProcess() {
      try {
        setShowEmailInput(false);
        setLoading(true);
        let responseLogin = await signinUser(
          walletAddress,
          //settingsConfig.ORGANIZATION_ID
        );

        if (responseLogin.token) {
          handleUserLoggedIn(responseLogin.data, responseLogin.token);
        } else {
          setLoading(false);
          handleUserNotFound();
        }
      } catch (e) {
        console.log("Error sign in: ", e);
        setLoading(false);
      }
    }

    if (walletAddress && walletAddress.length > 3) {
      signInProcess();
    }
  }, [walletAddress]);

  useEffect(() => {
    metamaskTimer.current = setInterval(() => {
      if (loadingMetamaskWallet) {
        const message =
          "Having issues connecting your wallet? Try refreshing the browser";
        setShowError({ show: true, message });
      }
    }, delay * 1000);

    // clear on component unmount
    return () => {
      clearInterval(metamaskTimer.current);
    };
  }, [loadingMetamaskWallet]);



  const addWalletListener = () => {
    console.log("In Add Wallet Listener");
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: any) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress("");
          setStatus("NOT_CONNECTED");
        }
      });
      window.ethereum.on("chainChanged", (chainId: any) => {
        console.log("chainChanged", chainId);
      });
    } else {
      setStatus("METAMASK_NOT_INSTALLED");
    }
  };

  const metamaskConnect = async () => {
    console.log('metamaskConnect');

    const isInstalled = await isMetaMaskInstalled(window);
    console.log("isInstalled", isInstalled);
    if (!isInstalled) {
      return setShowError({
        show: true,
        message: "Please install Metamask Wallet",
      });
    }
    setLoadingMetamaskWallet(true);
    const walletResponse = await connectMetamask(window);
    if (!walletResponse || walletResponse.error) {
      return;
    }
    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
    setLoadingMetamaskWallet(false);
    addWalletListener();
    setChannelOn(true);
  }

  const handleSignIn = async () => {
    try {
      let responseLogin = await signinUser(
        walletAddress,
        //settingsConfig.ORGANIZATION_ID
      );

      if (responseLogin.token) {
        setShowEmailInput(false);
        handleUserLoggedIn(responseLogin.data, responseLogin.token);
      } else {
        handleUserNotFound();
      }
    } catch (e) {
      console.log("Error sign in: ", e);
      setLoading(false);
    }
  };

  const handleUserNotFound = () => {
    setShowEmailInput(true);
    //@ts-ignore
    chrome.runtime.sendMessage(settingsConfig.EXTENSION_ID?.toString(), {
      "userData": {},
      "token": null,
    });
  };

  const handleSignup = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return setShowError({ show: true, message: "Email not valid" });
    }
    const messageSign = await getSignMessage();
    const response = await signMessage(window, messageSign.message);
    if (response.error) {
      return setLoading(false);
    }
    const wallet = response.address;
    const signature = response.signature;
    if (!signature || !wallet) {
      return;
    }
    setLoading(true);
    try {
      const signupResponse = await signupUser(
        wallet,
        signature,
        email,
        null,
        //settingsConfig.ORGANIZATION_ID
      );
      if (signupResponse.data) {
        localStorage.setItem("isLogin", true.toString());
        setLoading(false);
        setShowEmailInput(false);
        handleUserLoggedIn(signupResponse.data, signupResponse.token);
      } else {
        console.log("Error signup: ", signupResponse);
      }
    } catch (e: any) {
      console.log("Error Sign Up: ", e);
      handleErrorSignUp(e.error);
    }
    setLoading(false);
  };

  const handleErrorSignUp = (error: any) => {
    console.log("handleErrorSignUp: ", error);
    setShowError({ show: true, message: error.message });
  };

  const handleUserLoggedIn = (data: any, token: any) => {
    console.log("ext id: ", settingsConfig.EXTENSION_ID);
    //@ts-ignore
    chrome.runtime.sendMessage(settingsConfig.EXTENSION_ID, {
      userData: data,
      token: token,
    });
    let user = { token, data };
    setUser(user);
    setShowNotification(true);
    setLoading(false);
  };


  const coinbaseConnect = async () => {
    console.log('coinbaseConnect');

    const isInstalled = await isCoinbaseInstalled(window);
    if (!isInstalled) {
      return setShowError({
        show: true,
        message: "Please install Coinbase Wallet",
      });
    }
    if (!walletAddress) {
      const walletResponse = await connectCoinbase(window);
      setStatus(walletResponse.status);
      setWalletAddress(walletResponse.address);
      addWalletListener();
    } else {
      handleSignIn();
    }
    setChannelOn(true);
  }
  const channelFunc = () => {
    console.log('Channel the Funk');
    navigate('/dashboard');
  }
  const skipVideo = (step: number) => {
    if (vidRef.current) {
      vidRef.current.pause(); vidRef.current.currentTime = 0;
    }
    nextStep(step);
  }
  const endVideoIntroduction = (step: number) => {
    nextStep(step);
    if (vidRef.current) {
      vidRef.current.currentTime = 0;
    }
  }
  const startVideoIntroduction = () => {
    if (vidRef.current) { vidRef.current.play(); }
  }
  useEffect(() => {
    console.log("step:", step)
    if (step === 2) {
      startVideoIntroduction();
    }
  }, [step])
  return (
    <React.Fragment>
      <Header />
      <div className={`start-page-container step-${+step}`}>

        {/* {step<3 && (
          <button
            className="temp-next-screen"
            onClick={()=>nextStep(step)}
          >
            next step(just for tests)
          </button>
        )}
        {step===3 && (
          <Link
            to="/dashboard"
            className="temp-next-screen"
          >
            next step(just for tests)
          </Link>
        )} */}

        {[0, 1].includes(step) && (
          <div className="start-page-content">
            <div className="progress-img-container">
              <img className="progress-img" src="/bluechip.gif" alt="bluechip" />
            </div>
            <h2 className="p-title">Earn Bluechip NFTs with Funky</h2>
            {step === 0 && (
              <Counter
                step={step}
                nextStep={nextStep}
              />
            )}
            {step === 1 && (
              <button
                className="start-btn gradient-1"
                onClick={() => nextStep(step)}
              >
                Release the Funk
              </button>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="start-page-video-content">
            <video
              ref={vidRef}
              className="intro-video"
              onEnded={() => endVideoIntroduction(step)}
            >
              <source src="/tunky_video_1.mp4" type="video/mp4" />
            </video>
            <div className="btn-container">
              <button
                className="start-btn gradient-1 skip-video"
                onClick={() => skipVideo(step)}
              >
                Skip Video
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="start-page-connect-content">
            <div className="connect-img-container">
              <img className="connect-img" src="/talking.gif" alt="talking" />
            </div>
            <GrModal>
              {!showEmailInput && (<GrModalBody>

                <div className="connect-title">
                  Channel the Funk within
                </div>
                <p className="connect-text">
                  Want to channel the Funk from within?
                  Connect your wallet to tap into the MOJO which exists
                  in your Web3 life & rack up FUNKYTM points for Prizes!
                </p>
                <div className="btns-container">
                  <button
                    className="connect-btn gradient-1"
                    onClick={() => metamaskConnect()}
                  >
                    CONNECT WITH
                    <img className="btn-icon" src="/metamask.png" alt="metamask" />
                  </button>
                  <button
                    className="connect-btn gradient-1"
                    onClick={() => coinbaseConnect()}
                  >
                    CONNECT WITH
                    <img className="btn-icon" src="/coinbase.png" alt="coinbase" />
                  </button>
                </div>


              </GrModalBody>)}
              {showEmailInput && (<GrModalBody>

                <div style={{ display: "Grid", justifyContent: "center" }}>
                  <div className="connect-title"
                  >
                    <b> Enter Your Email to Continue</b>
                  </div>
                  <form style={{ marginTop: "10px", zIndex: 100 }} >
                    <input
                      id="standard-adornment-weight"
                      className="email-input"
                      placeholder="Your Email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <input type="button" onClick={handleSignup} value={loading ? "Loading...":"Submit" }/>
                  </form>
                </div>

              </GrModalBody>)}
              <GrModalFooter>
                <div className="btn-container">
                  <button
                    className="connect-v1-btn gradient-1"
                    onClick={channelFunc}
                    disabled={!channelOn}
                  >
                    Channel the Funk
                  </button>
                </div>
              </GrModalFooter>
            </GrModal>
          </div>
        )}


        {[0, 1, 3].includes(step) && <BottomAnime />}

      </div>
    </React.Fragment>
  )
}

export default HomePage
