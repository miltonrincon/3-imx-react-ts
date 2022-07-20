// //@ts-check

import {ethers} from "ethers";
import detectEthereumProvider from '@metamask/detect-provider';

const STATUS = {
	NOT_INSTALLED: "METAMASK_NOT_INSTALLED",
	CONNECTED: "CONNECTED",
}

const PROVIDERS = {
	METAMASK: "Metamask",
	COINBASE: "CoinBase"
}

export const CHAINS = {
	MAINNET: "0x1",
	KOVAN: "0x42",
	ROPSTEN: "0x3",
	RINKEBY: "0x4",
	GOERLI: "0x5",
}


const connectWallet = async(_window:any, providerName = PROVIDERS.METAMASK):Promise<{status:string, address:any, error:any|undefined }> => {
	const {ethereum} = _window;

	if (ethereum) {
		try {
			let provider = null;
			let providers = ethereum.providers
			console.log("Providers:", providers)
			if (providers) {
				// eslint-disable-next-line default-case
				switch (providerName) {
					case PROVIDERS.COINBASE:
						provider = ethereum.providers.find(({isCoinbaseWallet}:{isCoinbaseWallet:any}) => isCoinbaseWallet);
						break;
					case PROVIDERS.METAMASK:
						provider = ethereum.providers.find(({isMetaMask}: {isMetaMask:any}) => isMetaMask);
						break;
				}
				if (provider) {
					ethereum.setSelectedProvider(provider);
					const addressArray = await provider.request({
						method: "eth_requestAccounts"
					})
					const obj = {
						status: STATUS.CONNECTED,
						address: addressArray[0],
						error:undefined
					}

					return obj;
				} else {
					const addressArray = await _window.ethereum.request({
						method: "eth_accounts"
					})

					if (addressArray.length > 0) {
						return {
							address: addressArray[0],
							status: "",
							error:undefined
						}
					} else {
						return {address: "", status: "NOT_CONNECTED",
						error:undefined
					};
					}
				}
			} else {
				console.log("No Providers")
				try {
					const addressArray = await _window.ethereum.request({
						method: "eth_requestAccounts"
					})

					const obj = {
						status: STATUS.CONNECTED,
						address: addressArray[0],
						error:undefined
					}

					return obj;

				} catch (error) {
					console.log("##", error)
					return {
						address: "",
						status: "",
						error: error
					}
				}
			}
		} catch (error) {
			return {
				address: "",
				status: "",
				error: error
			}
		}
	} else {
		return {
			address: "",
			status: STATUS.NOT_INSTALLED,
			error:undefined
		}
	}
}



export const connectMetamask =
 (_window:any) => {
	return connectWallet(_window, PROVIDERS.METAMASK)
}


export const connectCoinbase =
 (_window:any) => {
	return connectWallet(_window, PROVIDERS.COINBASE)
}


export const isCoinbaseInstalled = async (_window:any) => {
	if (!_window.ethereum){
		return false
	}
	const provider:any = await detectEthereumProvider();
	const overrideIsMetaMask:any = provider.overrideIsMetaMask
	if (overrideIsMetaMask){
		const providers = await provider.providers;
		const coinbaseProvider = providers.find(({isCoinbaseWallet}:{isCoinbaseWallet:any}) => isCoinbaseWallet);
		return !!coinbaseProvider;
	}
	return provider?.isCoinbaseWallet
}


export const isMetaMaskInstalled = async (_window:any) => {
	if (!_window.ethereum){
		return false
	}
	const provider:any = await detectEthereumProvider();
	return provider?.isMetaMask
}


export const signMessage = async (_window:any, message:any) => {
	try {
		
		if (_window.ethereum) {
			
			const provider = new ethers.providers.Web3Provider(_window.ethereum);
			const signer = provider.getSigner();
			const signature = await signer.signMessage(message)
			const address = await signer.getAddress();
			
			return {
				message,
				signature,
				address
			};
		} else {
			return {
				address: "",
				status: STATUS.NOT_INSTALLED,
				error: null
			}
		}
		
	} catch (error) {
		return {error}
	}
};

export const getConnectedEthereumProvider = (_window:any) => {
	try {
		if (_window.ethereum) {
			return new ethers.providers.Web3Provider(_window.ethereum)
		} else {
			return {
				address: "",
				status: STATUS.NOT_INSTALLED,
				error: null
			}
		}
		
	} catch (error) {
		return {error}
	}
}

export const getEthereumChain = (_window:any) => {
	try {
		if (_window.ethereum) {
			const provider = new ethers.providers.Web3Provider(_window.ethereum)
			//@ts-ignore
			return provider?.provider?.chainId
		}
	} catch (e) {
		console.log("Error get Ethereum Chain: ", e)
		return null
	}
}

