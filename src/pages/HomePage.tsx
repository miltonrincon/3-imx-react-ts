import React, { useState, useEffect, useRef } from "react";
import WalletHeader from "../components/Wallet/WalletHeader";
import { useNavigate } from 'react-router-dom';
import Header from "components/Header/Header";
import Counter from "components/Counter/Counter";
import BottomAnime from "components/BottomAnime/BottomAnime";
import GrModal from "components/GrModal/GrModal";
import GrModalBody from "components/GrModal/GrModalBody/GrModalBody";
import GrModalFooter from "components/GrModal/GrModalFooter/GrModalFooter";

const HomePage = () => {
  let navigate = useNavigate();
  const vidRef = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(0);
  const [channelOn, setChannelOn] = useState(false);
  function nextStep(n: number) {
    setStep(n + 1);
  }
  const metamaskConnect = () => {
    console.log('metamaskConnect');
    setChannelOn(true);
  }
  const coinbaseConnect = () => {
    console.log('coinbaseConnect');
    setChannelOn(true);
  }
  const channelFunc = () => {
    console.log('Channel the Funk');
    navigate('/dashboard');
  }
  const skipVideo = (step:number) => {
    if(vidRef.current) { 
      vidRef.current.pause(); vidRef.current.currentTime = 0;
    }
    nextStep(step);
  }
  const endVideoIntroduction = (step:number) => {
    nextStep(step);
    if(vidRef.current) { 
      vidRef.current.currentTime = 0;
    }
  }
  const startVideoIntroduction = () => {
    if(vidRef.current) { vidRef.current.play(); }
  }
  useEffect(() => {
    console.log("step:",step)
    if(step === 2){
      startVideoIntroduction();
    }
  }, [step])
  return (
    <React.Fragment>
      <Header/>
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

        {[0,1].includes(step) && (
          <div className="start-page-content">
            <div className="progress-img-container">
              <img className="progress-img" src="/bluechip.gif" alt="bluechip" />
            </div>
            <h2 className="p-title">Earn Bluechip NFTs with Funky</h2>
            { step===0 && (
              <Counter
                step = {step}
                nextStep = {nextStep}
              />
            )}
            { step===1 && (
              <button
                className="start-btn gradient-1"
                onClick = {()=>nextStep(step)}
              >
                Release the Funk
              </button>
            )}
          </div>
        )}

        { step===2 && (
          <div className="start-page-video-content">
            <video
              ref={vidRef}
              className="intro-video"
              onEnded= {()=>endVideoIntroduction(step)}
            >
              <source src="/tunky_video_1.mp4" type="video/mp4" />
            </video>
            <div className="btn-container">
              <button
                className="start-btn gradient-1 skip-video"
                onClick={()=>skipVideo(step)}
              >
                Skip Video
              </button>
            </div>
          </div>
        )}

        { step===3 && (
          <div className="start-page-connect-content">
            <div className="connect-img-container">
              <img className="connect-img" src="/talking.gif" alt="talking"/>
            </div>
            <GrModal>
              <GrModalBody>
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
                    onClick={()=>metamaskConnect()}
                  >
                    CONNECT WITH
                    <img className="btn-icon" src="/metamask.png" alt="metamask"/>
                  </button>
                  <button
                    className="connect-btn gradient-1"
                    onClick={()=>coinbaseConnect()}  
                  >
                    CONNECT WITH
                    <img className="btn-icon" src="/coinbase.png" alt="coinbase"/>
                  </button>
                </div>
              </GrModalBody>
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

        { [0,1,3].includes(step) && <BottomAnime/> }

      </div>
    </React.Fragment>
  )
}

export default HomePage
