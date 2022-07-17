import React, { useState, useContext } from 'react';
// import { useUser } from 'context/user-context';
import "./Accbox.scss"
const Accbox = () => {
  // const {state:user} = useUser();
  const [accountName] = useState('0xkdjdsd');
  return (
    <div className="Accbox">
      {/* <div className="acc-name">{user?.userName}</div> */}
      <div className="acc-name">{accountName}</div>
      <div className="acc-img-container">
        <img className="acc-image" src="/user.png" alt="acc" />
      </div>
    </div>
  )
}

export default Accbox
