import React from "react";
import "./GrModalBody.scss"

interface GrModalBodyProps {
  children: React.ReactNode;
}
const GrModalBody = ({children}:GrModalBodyProps) : JSX.Element => {
  return (
    <div className="modal-v1-body">
      {children}
    </div>
  )
}
export default GrModalBody
