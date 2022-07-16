import axios from "axios";
import settingsConfig from "../config/settingsConfig";

export const confirmExtension = (token) => {
	const data = {};
	return new Promise((resolve, reject) => {
		axios
			.post(`${settingsConfig.ADMIN_API_URL}/users/confirm-extension`, data, {
				headers: {
					"Authorization": token,
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