import { useState, useEffect } from "react";
import "./Counter.scss"
const Counter = ({step, nextStep}: { step: number, nextStep: Function }) => {
  let timerProgress: any;
  const [progress, setProgress] = useState(0);
  const frequencyTimerProgress = 90;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateProgress = () => {
    timerProgress = setInterval(() => {
      setProgress(prevProgress => prevProgress + 1)
    }, frequencyTimerProgress)
    if (progress === 100) {
      clearInterval(timerProgress);
      nextStep(step);
    }
  }
  useEffect(() => {
    updateProgress();
    return () => clearInterval(timerProgress)
  }, [progress])
  return (
    <div className="progress-counter">
      {`${progress} %`}
    </div>
  )
}

export default Counter
