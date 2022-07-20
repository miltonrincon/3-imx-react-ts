import React, { useContext, useEffect, useState } from "react";

// noinspection ES6CheckImport
import { useNavigate } from "react-router-dom";
import { cleanUserDataStorage } from "../../Integrations/LocalStorage";
import settingsConfig from "../../config/settingsConfig";
import { AuthUserContext } from "../../context/AuthUserContext";
import { getWalletContent } from "../../Util/WalletUtil";
//import "./WalletStyles.css"

import {
  CHAINS,
  connectMetamask,
  getConnectedEthereumProvider, getEthereumChain,
} from "../../Integrations/Wallet";

import "./Accbox.scss"
const Accbox = () => {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(false);
  const [errorNetworks, setErrorNetworks] = useState({error: false, message: ""})
  const { user } = useContext(AuthUserContext);

  
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    verifyConnectedWallet();
  }, []);

  const verifyConnectedWallet = async () => {
    const provider = getConnectedEthereumProvider(window);
    //@ts-ignore
    const isMetamask = provider.connection.url === "metamask";
    if (isMetamask) {
      await connectMetamask(window);
      addWalletListener();
    }
    const chain = getEthereumChain(window);
    
    if (settingsConfig.ENVIRONMENT === "PROD"){
      if (chain !== CHAINS.MAINNET){
        setErrorNetworks({error: true, message: `Please change to Mainnet network to use this feature`});
      } else {
        setErrorNetworks({error: false, message: ""})
      }
    }
  };
  
  const addWalletListener = () => {
    if (window.ethereum) {
      // noinspection JSUnresolvedFunction
      window.ethereum.on("accountsChanged", (accounts:any) => {
        const selected = accounts[0];
        if (selected.toLowerCase() !== user.wallet.toLowerCase()) {
          // noinspection JSIgnoredPromiseFromCall
          handleLogout();
        }
      });
    }
  };

  const handleClick = (event:any) => {
    setAnchorEl(!anchorEl);//event.currentTarget
  };

  const handleLogout = async () => {
    await cleanUserDataStorage(settingsConfig.ORGANIZATION_ID);
    //@ts-ignore
    chrome.runtime.sendMessage(settingsConfig.EXTENSION_ID?.toString(), {
      "userData": {},
      "token": null,
    });
    navigate("/");
    setAnchorEl(false);
  };
  console.log(getWalletContent(user.wallet), user)
  return (
    <div className="Accbox">
      <div className="user-profile" onClick={handleClick}>
      <div className="acc-name">{getWalletContent(user.wallet)}</div>
      <div className="acc-img-container">
        <img className="acc-image" src="/user.png" alt="acc" />
      </div>
      </div>
      <div className={`user-logout connect-v1-btn gradient-1 ${anchorEl? "show":""}`}onClick={handleLogout}>
        Logout
      </div>
    </div>
  )
}

export default Accbox
