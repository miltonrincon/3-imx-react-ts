import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import {DASHBOARD_PATH} from 'routes/dashboardRoutes';
import "./DashboardQuests.scss"
const DashboardQuests = () => {
  const dummyQuestArray = [
    {id:1, img: '/talking.gif',codename: 'QUEST TREE #1',status: '',name: 'Board the Soul Train'},
    {id:2, img: '/talking.gif',codename: 'QUEST TREE #2',status: 'LOCKED',name: 'Harnessing The Funk'},
    {id:3, img: '/talking.gif',codename: 'QUEST TREE #3',status: 'LOCKED',name: 'ACTIVITY'},
    {id:4, img: '/talking.gif',codename: 'QUEST TREE #4',status: 'LOCKED',name: 'ACTIVITY'},
    {id:5, img: '/talking.gif',codename: 'QUEST TREE #5',status: 'LOCKED',name: 'ACTIVITY'},
    {id:6, img: '/talking.gif',codename: 'QUEST TREE #6',status: 'LOCKED',name: 'ACTIVITY'},
  ]
  const [questArrayData, setQuestArrayData] = useState(dummyQuestArray);

  // use useEffect for call this listdata for list from BE and setListDataArr method to save into state here
  // useEffect(() => {
  //  setListDataArr([....])
  //  setArrData([...])
  // }, []);
  const [questId, setQuestId] = useState(0);
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
                  <Link className="mission-item" to={`${DASHBOARD_PATH}/quests/${el.id}/missions`}>
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
      <div className="r-container">
        <div className="info-container">
          {/* TODO: render these elements from array data */}
          <div className="r-title">My Mojo Vault</div>
          <div className="r-text">Every Mojo Multiplier you mint will multiply the Passive & Active Funky Points you earn. Mojo Multilpiers perks stack infinitely!</div>
        </div>
        
        <div className="r-btn-container">
          {/* <Link className="Grbutton" to={`${DASHBOARD_PATH}/mint`}>
            Mint more Mojo
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default DashboardQuests
