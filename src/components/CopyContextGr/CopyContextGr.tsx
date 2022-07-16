import React, { useRef } from "react";
import { ReactComponent as CopyContextIcon } from "assets/icons/copy_context.svg";
import "./CopyContextGr.scss"
interface CopyContextGrProps {
  children: string,
  clickTest?: Function
}
const CopyContextGr = ({children, clickTest}:CopyContextGrProps) => {
  const copyTxt = useRef<any>();
  const handleCopyTxt = () => {
    if(copyTxt.current) {
      copyTxt.current.select();
      document.execCommand('copy');
      clickTest&&clickTest(copyTxt.current.value);
    }
  }
  return (
    <div className="CopyContextGr" onClick={handleCopyTxt}>
      <input
        className="copy-text-input"
        ref={copyTxt}
        type="text"
        value={children}
        readOnly={true}
      />
      <CopyContextIcon className="copy-context-icon"/>
    </div>
  )
}

export default CopyContextGr
