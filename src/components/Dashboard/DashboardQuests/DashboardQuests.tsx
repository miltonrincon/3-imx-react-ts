import React, { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {DASHBOARD_PATH} from 'routes/dashboardRoutes';
import ProgressBar from "components/ProgressBar/ProgressBar";
import "./DashboardQuests.scss"

const DashboardQuests = () => {
  const dummyQuestArray = [
    {id:1, img: '/talking.gif',codename: 'QUEST TREE #1',status: '',name: 'Board the Soul Train'},
    {id:2, img: '/talking.gif',codename: 'QUEST TREE #2',status: 'UNCNOWN',name: 'Harnessing The Funk'},
    {id:3, img: '/talking.gif',codename: 'QUEST TREE #3',status: 'LOCKED',name: 'ACTIVITY'},
    {id:4, img: '/talking.gif',codename: 'QUEST TREE #4',status: 'LOCKED',name: 'ACTIVITY'},
    {id:5, img: '/talking.gif',codename: 'QUEST TREE #5',status: 'LOCKED',name: 'ACTIVITY'},
    {id:6, img: '/talking.gif',codename: 'QUEST TREE #6',status: 'LOCKED',name: 'ACTIVITY'},
  ]
  const [questArrayData, setQuestArrayData] = useState(dummyQuestArray);

  // use useEffect for call this listdata for list from BE and setListDataArr method to save into state here
  // useEffect(() => {
  //  setQuestArrayData([....])
  // }, []);
  const [questId, setQuestId] = useState(0);
  // this questId should be saved in context if you want to have back button on next page with back and selected the same questId
  useEffect(() => {
    setQuestId(questArrayData[0].id)
  }, [questArrayData]);
  const isLocked = (status: string) => {
    return status.toLowerCase()==='locked'
  }
  return (
    <div className="DashboardQuest">
      <div className="l-container">
        <Scrollbars style={{ height: '100%' }}>
          <div className="top-l-image-container"></div>
          <div className="l-body">
            <div className="l-title">
              Complete Missions to Earn Points
            </div>
            <div className="mission-list">
              <div className="mission-list-internal">
                {questArrayData.map(el=>(
                  <div
                    key={el.id}
                    onClick = { isLocked(el.status) || (questId===el.id) ? ()=>null : ()=>setQuestId(el.id) }
                    className={classNames("mission-item", { disabled: isLocked(el.status), selected: questId===el.id} )}
                  > {/*to={`${DASHBOARD_PATH}/quests/${el.id}/missions`} */}
                    <div className="item-img-container">
                      <img className="item-img" src={el.img} alt="item" />
                    </div>
                    <div className="item-info">
                      <div>
                        <span className="item-status">{el.status}</span>
                        {el.status ? <>&mdash;</> : ''}
                        <span className="item-codename">{el.codename}</span>
                      </div>
                      <div className="item-name">
                        {el.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
      <div className="r-container">
        <div className="img-contsiner">
          <img className="quest-image" src="/quest_img.png" alt="quest" />
        </div>
        <div className="info-container">
          {/* TODO: render these elements from array data (after user select and possible autoselect first element)*/}
          <div className="r-title">My Mojo Vault</div>
          <div className="r-text">Every Mojo Multiplier you mint will multiply the Passive & Active Funky Points you earn. Mojo Multilpiers perks stack infinitely!</div>
        </div>
        <div className="progress-container">
          <ProgressBar val={700} max={900}/>
          <div className="progress-info">
            <div className="progress-value">
              700 / 900
            </div>
            <div className="progress-label">
              POINTS REMAINING 
            </div>
          </div>
        </div>
        <div className="r-btn-container">
          <Link className="Grbutton" to={`${DASHBOARD_PATH}/quests/${questId}/missions`}>
            Start Quest Tree
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardQuests
