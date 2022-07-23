import "./ProgressBar.scss"
const ProgressBar = ({val,max}:{val: number,max: number}) => {
  return (
    <div className="ProgressBar">
      <span className="progress-bar-value" style={{width: `${val*100/max}%` }}></span>
    </div>
  )
}

export default ProgressBar
