/* global chrome*/

export const isExtensionInstalled = (extensionId) =>{
  let installed = true
  try {
    chrome.runtime.sendMessage(extensionId, null, (response) => {
    if (!response) {
      console.log('No extension');
      installed= false;
    }
  });
  } catch (error) {
    installed= false
  }
  return installed;
}