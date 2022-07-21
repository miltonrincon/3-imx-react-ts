import axios from "axios";
import settingsConfig from "../config/settingsConfig";

export const signinUser = (wallet) => {
	const organizationId = settingsConfig.ORGANIZATION_ID;
	const data = {
		wallet,
		organizationId: organizationId,
	};
	return new Promise((resolve, reject) => {
		axios
			.post(`${settingsConfig.ADMIN_API_URL}/auth/signin`, data, {
				headers: {
					"x-api-key": settingsConfig.BACKEND_API_KEY,
				},
			})
			.then((res) => {
				const data = res.data;
				
				resolve(data);
			})
			.catch(function (error) {
				reject(error)
			});
	});
};

export const signupUser = (wallet, signature, email, code = null) => {
	const organizationId = settingsConfig.ORGANIZATION_ID;
	const data = {
		wallet,
		organizationId,
		email: email,
		source: "webpage",
		signature: signature,
		referralCode: code,
	};
	return new Promise((resolve, reject) => {
		axios
			.post(`${settingsConfig.ADMIN_API_URL}/auth/signup`, data, {
				headers: {
					"x-api-key": settingsConfig.BACKEND_API_KEY,
				},
			})
			.then((res) => {
				const data = res.data;
				
				resolve(data);
			})
			.catch(function (error) {
				reject(error);
			});
	});
};

export const getSignMessage = () => {
	const organizationId = settingsConfig.ORGANIZATION_ID;
	return new Promise((resolve, reject) => {
		axios
			.get(
				`${settingsConfig.ADMIN_API_URL}/auth/wallet?organization=${organizationId}`,
				{
					headers: {
						"x-api-key": settingsConfig.BACKEND_API_KEY,
					},
				}
			)
			.then((res) => {
				const data = res.data;
				
				resolve(data);
			})
			.catch(function (error) {
				reject(error)
			});
	});
};
