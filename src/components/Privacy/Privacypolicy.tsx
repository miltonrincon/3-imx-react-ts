import React from "react";
//import "./GrModal.scss"
import { getPrivacyPolicy } from "./PrivacyPolicyTemplate";


const PrivacyPolicy = ({values}:{values:any}) => {
  return (
    <div className="modal-v1 gradient-1">
     <div
      dangerouslySetInnerHTML={{__html: getPrivacyPolicy({values})}}
    />
    </div>
  )
}
export default PrivacyPolicy;