import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";
import WelcomeModal from "components/WelcomeModal/WelcomeModal";
import DashboardPanel from "components/DashboardPanel/DashboardPanel";
import DashboardPanelNavigation from "components/DashboardPanel/DashboardPanelNavigation/DashboardPanelNavigation";
import DashboardPanelBody from "components/DashboardPanel/DashboardPanelBody/DashboardPanelBody";
import AppHeader from "components/AppHeader/AppHeader";
import DashNavItem from "components/DashboardPanel/DashNavItem/DashNavItem";
import {dashRoutes} from 'routes/dashboardRoutes';

const Dashboard = () => {
  const location = useLocation();
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
              {dashRoutes.map(el=>(
                <DashNavItem
                  key = {el.label}
                  icon = {<el.iconComponent className="nav-icon"/>}
                  to = {el.to}
                  label = {el.label}
                  active = { el.to === location.pathname }
                />
              ))}
            </DashboardPanelNavigation>
            <DashboardPanelBody>
              <Routes>
                {dashRoutes.map(el=>(
                  <Route
                    key = {el.label}
                    path={el.to}
                    element={<el.component/>}
                  />
                ))}
              </Routes>
            </DashboardPanelBody>
          </DashboardPanel>
          {welcomeModal && <WelcomeModal onSubmit={ earnQuest } />}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
