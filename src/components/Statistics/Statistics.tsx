import React from 'react';
import { ReactComponent as FunkyIcon } from "assets/icons/funky.svg";
import { ReactComponent as MailIcon } from "assets/icons/mail.svg";
import { ReactComponent as DropdownArrowIcon } from "assets/icons/dropdown_arrow_icon.svg";
import { ReactComponent as DropdownPlusIcon } from "assets/icons/dropdown_plus_icon.svg";
import "./Statistics.scss"
const Statistics = () => {
  return (
    <div className="Statistics">
      <div className="stat-item">
        <FunkyIcon className="stat-icon"/>
        <div className="stat-box">
          <span className="btn-label">1000 POINTS</span>
        </div>
        <div className="stat-dropdown-wrapper">
          <div className="stat-btn pd-sm">
            <span className="btn-label">2X</span>
            <DropdownArrowIcon className="icon drop-icon"/>
          </div>
        </div>
      </div>
      <div className="stat-item">
        <MailIcon className="stat-icon"/>
        <div className="stat-dropdown-wrapper">
          <div className="stat-btn">
            <span className="btn-label">5 INVITES</span>
            <DropdownPlusIcon className="icon plus-icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
