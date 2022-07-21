import { useState, useRef, useEffect } from "react";
import StatisticsDropdownMenu from "components/StatisticsDropdownMenu/StatisticsDropdownMenu";
import CopyContextGr from "components/CopyContextGr/CopyContextGr";
import Grbutton from "components/Grbutton/Grbutton";
import { ReactComponent as FunkyIcon } from "assets/icons/funky.svg";
import { ReactComponent as MailIcon } from "assets/icons/mail.svg";
import { ReactComponent as DropdownArrowIcon } from "assets/icons/dropdown_arrow_icon.svg";
import { ReactComponent as DropdownPlusIcon } from "assets/icons/dropdown_plus_icon.svg";

import "./Statistics.scss"
const Statistics = () => {
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  },[])
  // eject points to Context/Redux if it used globally
  const [points, setPoints] = useState(1000);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showReferals, setShowReferals] = useState(false);
  const myStatisticsRef = useRef<any>();
  const myReferalsRef = useRef<any>();
  const toggleReferals = () => {
    setShowReferals(prev => !prev)
  }
  const toggleStatistics = () => {
    setShowStatistics(prev => !prev )
  }
  const handleClickOutside = (e:any) => {
    if(!myStatisticsRef.current.contains(e.target)) {
      setShowStatistics(false);
    }
    if(!myReferalsRef.current.contains(e.target)) {
      setShowReferals(false);
    }
  }
  const mintMoreMojo = () => {
    console.log("request to BE/charging mintMoreMojo");
    setPoints(prev => prev * 2);
  }
  const copyedTextAction = (text: string) => {
    console.log(text);
  }
  return (
    <div className="Statistics">
      <div className="stat-item">
        <FunkyIcon className="stat-icon"/>
        <div className="stat-box">
          <span className="btn-label">{`${points} POINTS`}</span>
        </div>
        <div className="stat-dropdown-wrapper" ref={myStatisticsRef}>
          <div
            className="stat-btn pd-sm"
            onClick={toggleStatistics}
          >
            <span className="btn-label">2X</span>
            <DropdownArrowIcon className="icon drop-icon"/>
          </div>
          { showStatistics&&
            <StatisticsDropdownMenu
              align="center"
            >
              <div className="drop-header">
                <div className="drop-header-title">
                  Mojo Multiplier Statistics
                </div>
              </div>
              <div className="drop-body">
                <div>
                  <div className="stat-value">
                    2X
                  </div>
                  <div className="stat-details">
                    Multiplier
                  </div>
                </div>
                <div>
                  <div className="stat-value">
                    2
                  </div>
                  <div className="stat-details">
                    Mojo Vials
                  </div>
                </div>
              </div>
              <div className="drop-footer">
                <Grbutton
                  onClick={mintMoreMojo}
                >
                  Mint more Mojo
                </Grbutton>
              </div>
            </StatisticsDropdownMenu>
          }
        </div>
      </div>
      <div className="stat-item">
        <MailIcon className="stat-icon"/>
        <div className="stat-dropdown-wrapper" ref={myReferalsRef}>
          <div
            className="stat-btn"
            onClick={toggleReferals}
          >
            <span className="btn-label">5 INVITES</span>
            <DropdownPlusIcon className="icon plus-icon"/>
          </div>
          { showReferals&&
            <StatisticsDropdownMenu>
              <div className="drop-header">
                <div className="drop-header-title">
                  Mojo Referrals
                </div>
              </div>
              <div className="drop-body">
                <div>
                  <div className="stat-value">
                    5
                  </div>
                  <div className="stat-details">
                    Invited
                  </div>
                </div>
                <div>
                  <div className="stat-value">
                    2
                  </div>
                  <div className="stat-details">
                    Invited
                  </div>
                </div>
              </div>
              <div className="drop-footer" onClick={()=>{return null}}>
                <CopyContextGr
                  clickTest={copyedTextAction}
                >
                  .../referral/xun7vkb53z
                </CopyContextGr>
              </div>
            </StatisticsDropdownMenu>
          }
        </div>
      </div>
    </div>
  )
}

export default Statistics
