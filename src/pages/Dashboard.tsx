import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import WelcomeModal from "components/WelcomeModal/WelcomeModal";
import DashboardPanel from "components/DashboardPanel/DashboardPanel";
import DashboardPanelNavigation from "components/DashboardPanel/DashboardPanelNavigation/DashboardPanelNavigation";
import DashboardPanelBody from "components/DashboardPanel/DashboardPanelBody/DashboardPanelBody";
import AppHeader from "components/AppHeader/AppHeader";


const Dashboard = () => {
  // let navigate = useNavigate();
  const [welcomeModal, setWelcomeModal] = useState(true);
  const earnQuest = () => {
    setWelcomeModal(false);
    // navigate('/dashboard/home');
  }
  return (
    <React.Fragment>
      <AppHeader/>
      <div className="dashboard">
        <div className="dashboard-content-container">
          <DashboardPanel>
            <DashboardPanelNavigation>

            </DashboardPanelNavigation>
            <DashboardPanelBody>

            </DashboardPanelBody>
          </DashboardPanel>
          {welcomeModal && <WelcomeModal onSubmit={ earnQuest } />}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
