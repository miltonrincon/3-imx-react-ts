import React from 'react';
import GrModal from "components/GrModal/GrModal";
import GrModalBody from "components/GrModal/GrModalBody/GrModalBody";
import GrModalFooter from "components/GrModal/GrModalFooter/GrModalFooter";
import "./WelcomeModal.scss"
const WelcomeModal = ({onSubmit}: { onSubmit: Function }) => {
  return (
    <div className="modal-container">
      <div className="connect-img-container">
        <img className="connect-img" src="/talking.gif" alt="talking"/>
      </div>
      <GrModal>
        <GrModalBody>
          <div className="connect-title">
            All Aboard the Soul Train
          </div>
          <p className="connect-text">
            Welcome to your Funky Studio Dashboard - tap into
            your inner funk by starting your first Mojo Quest
            & rack up those precious Funky Points
          </p>
        </GrModalBody>
        <GrModalFooter>
          <div className="btn-container">
            <button
              className="connect-v1-btn gradient-1"
              onClick={()=> onSubmit()}
            >
              Earn via Quest 0
            </button>
          </div>
        </GrModalFooter>
      </GrModal>
    </div>
  )
}

export default WelcomeModal
