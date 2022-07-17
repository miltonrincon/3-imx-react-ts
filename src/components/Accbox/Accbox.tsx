import { useState } from "react";
import "./Accbox.scss"
const Accbox = () => {
  // get accountName from Context/Redux
  const [accountName] = useState('0xkdjdsd');
  return (
    <div className="Accbox">
      <div className="acc-name">{accountName}</div>
      <div className="acc-img-container">
        <img className="acc-image" src="/user.png" alt="acc" />
      </div>
    </div>
  )
}

export default Accbox
