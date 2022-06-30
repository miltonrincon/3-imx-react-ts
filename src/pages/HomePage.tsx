import React, { useState, useEffect, useRef } from "react";
import WalletHeader from "../components/Wallet/WalletHeader";
import { Link } from 'react-router-dom';

const HomePage = () => {
  let timerProgress: any;
  const vidRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [channelOn, setChannelOn] = useState(false);
  
  
  function nextStep(n: number) {
    setStep(n + 1);
  }
  const metamaskConnect = () => {
    //       console.log('metamaskConnect');
    //       this.channelOn = true;
  }
  const coinbaseConnect = () => {
    //       console.log('coinbaseConnect');
    //       this.channelOn = true;
  }
  const channelFunc = () => {
    //       console.log('Channel the Funk');
    //       this.$router.push('/dashboard');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateProgress = () => {
    timerProgress = setInterval(() => {
      setProgress(prevProgress => prevProgress + 1)
    }, 50)
    if (progress === 100) {
      clearInterval(timerProgress);
      nextStep(step);
    }
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
  useEffect(() => {
    updateProgress();
    return () => clearInterval(timerProgress)
  }, [progress])
  
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
    <div className={`start-page-container step-${+step}`}>

      {step<3 && (
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
      )}

      {[0,1].includes(step) && (
        <div className="start-page-content">
          <div className="progress-img-container">
            <img className="progress-img" src="/bluechip.gif" alt="bluechip" />
          </div>
          <h2 className="p-title">Earn Bluechip NFTs with Funky</h2>
          { step===0 && (
            <div className="progress-counter">
              ${progress} %
            </div>
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
          <div className="content-img-container">
            <img className="connect-img" src="/talking.gif" alt="talking"/>
          </div>
          <div className="modal-v1 gradient-1">
            <div className="modal-v1-body">
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
                    onClick={()=>coinbaseConnect}  
                  >
                    CONNECT WITH
                    <img className="btn-icon" src="/coinbase.png" alt="coinbase"/>
                  </button>
                </div>
              </div>
              <div className="btn-container">
              <button
                className="connect-v1-btn gradient-1"
                onClick={channelFunc}
                disabled={!channelOn}
              >
                Channel the Funk
                </button>
              </div>
            </div>
          </div>
      )}

      { [0,1,3].includes(step) && <div className="bottom-bg-container"></div> }

    </div>
  )
}

export default HomePage

// export default {
//   data() {
//     return {

//       layout: 'custom',
//     };
//   },
//   mounted() {
//     this.startAnimation();
//   },
//   methods: {
//     startAnimation() {
//       const animeInterval = setInterval(() => {
//         if (this.progress < 100) this.progress += 1;
//         else {
//           clearInterval(animeInterval);
//           this.nextStep(this.step);
//         }
//       }, 50);
//     },

//     metamaskConnect() {
//       console.log('metamaskConnect');
//       this.channelOn = true;
//     },
//     coinbaseConnect() {
//       console.log('coinbaseConnect');
//       this.channelOn = true;
//     },
//     channelFunc() {
//       console.log('Channel the Funk');
//       this.$router.push('/dashboard');
//     },
//     startVideoIntroduction(step) {
//       this.media = document.querySelector('.intro-video');
//       this.nextStep(step);
//       this.media.play();
//     },
//     skipVideo(step) {
//       this.nextStep(step);
//       this.media.pause();
//       this.media.currentTime = 0;
//     },
//     
//   },
// };