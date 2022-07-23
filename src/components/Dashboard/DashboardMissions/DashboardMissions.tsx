import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import classNames from 'classnames/bind';
import {DASHBOARD_PATH} from 'routes/dashboardRoutes';
import BackLink from "components/BackLink/BackLink";
import { ReactComponent as FunkyIcon } from "assets/icons/funky_w.svg";

import "./DashboardMissions.scss"

const DashboardMissions = () => {
  const dummyMissionsArray = [
    {id:1, val: 700,name: 'Install Funky',currency: 'POINTS'},
    {id:2, val: 500,name: 'What are Funky Points?',currency: 'POINTS'},
    {id:3, val: 400,name: 'What are Mojo Vials',currency: 'POINTS'},
  ]
  const [missionsArrayData, setMissionsArrayData] = useState(dummyMissionsArray);

  // use useEffect for call this listdata for list from BE and setListDataArr method to save into state here
  // useEffect(() => {
  //  setQuestArrayData([....])
  // }, []);
  const [missionId, setMissionId] = useState(0);
  // this questId should be saved in context if you want to have back button on next page with back and selected the same questId
  useEffect(() => {
    setMissionId(missionsArrayData[0].id)
  }, [missionsArrayData]);
  interface MissionElementProps {
    id: any,
    val: number,
    currency: string,
    name: string
  }
  const MissionElement = ({id, val, currency, name}: MissionElementProps) => {
    return (
      <div
        onClick={()=>setMissionId(id)}
        className={classNames("mission-element", {selected: missionId === id})}
      >
        <div>
          <div className="mission-value">
            {val}
          </div>
          <div className="mission-label">
            {currency}
          </div>
        </div>
        <div className="mission-name">{name}</div>
        <div>
          {/* TODO: route for missing outside DashboardPanel with back functionality*/}
          <Link
            onClick={e => e.stopPropagation()}
            to={`${id}`}
            className="Grbutton"
          >
            Start Quest
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="DashboardMissions">
      <div className="l-container">
        <div className="back-container">
          <BackLink to={`${DASHBOARD_PATH}/quests`}>
            Back
          </BackLink>
        </div>
        <div className="missions-info">
          <div className="l-title">
            Board the Soul Train
          </div>
          <div className="l-text">
            Finish your onboarding on to the Soul Train & earn Funky points just by learning how to use the Funky Platform & channeling your inner Funk.
          </div>
        </div>
        <div className="missions-list">
          <Scrollbars style={{height: '100%'}}>
            {dummyMissionsArray.map(el=>{
              return(
                <MissionElement
                  key={el.id}
                  id={el.id}
                  val={el.val}
                  currency={el.currency}
                  name={el.name}
                />
              )
            })}
          </Scrollbars>
        </div>
      </div>
      <div className="r-container">
        <div className="r-img-container">
          <img className="mission-img" src="/talking.gif" alt="quest" />
        </div>
        <div className="r-info-container">
          <div className="r-title">
            Install The Funky Ext.
          </div>
          <div className="r-text">
            Funky Extension connects straight to your wallet & rewards you FREE Funky Points for daily Wallet Interactions such as buying, selling & holding NFTs!
          </div>
        </div>
        <div className="r-bottom-container">
          <div className="r-bottom-info">
            <div className="mission-vl-box">
              <div className="mission-value">
                700
              </div>
              <div className="mission-label">
                POINTS 
              </div>
            </div>
            <FunkyIcon className="currency-icon"/>
          </div>
          {/* TODO: route for missing outside DashboardPanel with back functionality*/}
          <Link
            // to={`${id}`}
            to={'11'}
            className="Grbutton"
          >
            Start Quest
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardMissions
