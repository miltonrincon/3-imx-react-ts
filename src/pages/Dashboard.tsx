import React, {useState} from 'react';
import GrModal from "components/GrModal/GrModal";
import GrModalBody from "components/GrModal/GrModalBody/GrModalBody";
import GrModalFooter from "components/GrModal/GrModalFooter/GrModalFooter";

const Dashboard = () => {
  const [welcomeModal, setWelcomeModal] = useState(true);
  const earnQuest = () => {
    setWelcomeModal(false);
  }
  return (
    <div className="dashboard">
      <div className="dashboard-content-container">
        {welcomeModal&& (
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
                    onClick={()=>earnQuest()}
                  >
                    Earn via Quest 0
                  </button>
                </div>
              </GrModalFooter>
            </GrModal>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
