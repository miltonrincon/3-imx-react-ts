import React, {useState} from 'react';
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
            <div className="modal-v1 gradient-1">
              <div className="modal-v1-body">
                <div className="connect-title">
                  All Aboard the Soul Train
                </div>
                <p className="connect-text">
                  Welcome to your Funky Studio Dashboard - tap into
                    your inner funk by starting your first Mojo Quest
                    & rack up those precious Funky Points
                </p>
              </div>
              <div className="btn-container">
                <button
                  className="connect-v1-btn gradient-1"
                  onClick={()=>earnQuest()}
                >
                  Earn via Quest 0
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
