import React from "react";
import "./GrModal.scss"

interface GrModalProps {
  children?: React.ReactNode;
}

const GrModal = ({children}:GrModalProps) => {
  return (
    <div className="modal-v1 gradient-1">
      {children}
    </div>
  )
}
export default GrModal