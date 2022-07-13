import React from "react";
import "./GrModalFooter.scss"

interface GrModalFooterProps {
  children: React.ReactNode;
}
const GrModalFooter = ({children}:GrModalFooterProps) => {
  return (
    <div className="modal-v1-footer">
      {children}
    </div>
  )
}
export default GrModalFooter
