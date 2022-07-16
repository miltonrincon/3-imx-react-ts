/* global chrome*/
import settingsConfig from "config/settingsConfig";

export const isExtensionInstalled = (setIsFunkyExtInstalled) =>{
  let installed = true
  chrome.runtime.sendMessage(settingsConfig.EXTENSION_ID, null, (response) => {
    if (!response) {
      console.log('No extension');
      installed= false;
    }
  });
  setIsFunkyExtInstalled(installed);
}