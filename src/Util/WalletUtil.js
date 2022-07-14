export const getWalletContent = (walletAddress) => {
	if (!walletAddress){
		return ''
	}
	
	return walletAddress.length > 0 ? (
		String(walletAddress).substring(0, 5) +
		"..." +
		String(walletAddress).substring(38)
	) : "Connect Wallet";
};
