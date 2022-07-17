import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import WelcomeModal from "components/WelcomeModal/WelcomeModal";
import DashboardPanel from "components/DashboardPanel/DashboardPanel";
import DashboardPanelNavigation from "components/DashboardPanel/DashboardPanelNavigation/DashboardPanelNavigation";
import DashboardPanelBody from "components/DashboardPanel/DashboardPanelBody/DashboardPanelBody";
import AppHeader from "components/AppHeader/AppHeader";
import DashNavItem from "components/DashboardPanel/DashNavItem/DashNavItem";
import { ReactComponent as DashHomeIcon } from "assets/icons/dash_nav_home.svg";
import { ReactComponent as DashInventoryIcon } from "assets/icons/dash_nav_inventory.svg";
import { ReactComponent as DashQuestIcon } from "assets/icons/dash_nav_quest.svg";
import { ReactComponent as DashVialIcon } from "assets/icons/dash_nav_vial.svg";
import { ReactComponent as DashRewardsIcon } from "assets/icons/dash_nav_rewards.svg";
import { ReactComponent as DashInvitesIcon } from "assets/icons/dash_nav_invites.svg";




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
              <DashNavItem
                icon = {<DashHomeIcon className="nav-icon"/>}
                to= {'/dashboard/home'}
                active = {true}
              />
              <DashNavItem
                icon = {<DashVialIcon className="nav-icon"/>}
                to= {'/dashboard/vial'}
                active = {false}
              />
              <DashNavItem
                icon = {<DashQuestIcon className="nav-icon"/>}
                to= {'/dashboard/quest'}
                active = {false}
              />
              <DashNavItem
                icon = {<DashInventoryIcon className="nav-icon"/>}
                to= {'/dashboard/inventory'}
                active = {false}
              />
              <DashNavItem
                icon = {<DashRewardsIcon className="nav-icon"/>}
                to= {'/dashboard/rewards'}
                active = {false}
              />
              <DashNavItem
                icon = {<DashInvitesIcon className="nav-icon"/>}
                to= {'/dashboard/invites'}
                active = {false}
              />
              
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
