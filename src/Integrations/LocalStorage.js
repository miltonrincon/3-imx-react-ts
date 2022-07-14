import settingsConfig from "../config/settingsConfig";

const KEYS = {
	TOKEN: `sc-token-`,
	USER_ADDRESS: `sc-user-address-`,
	USER_CODE: `sc-user-code-`,
	USER_ID: `sc-user-id-`,
	USER_STATUS: `sc-status-`,
	USER_WALLET: `sc-wallet-`,
	USER_EMAIL: `sc-email-`,
	USER_CONFIRMED: `sc-confirmed-`
}

const ORG_KEYS = {
	LABEL: `sc-org-label-`,
	ICON: `sc-org-icon-`,
	ID: `sc-org-id-`,
	PREFIX: `sc-org-prefix-`,
}

/**
 *
 * @param wallet
 * @param id
 * @param code
 * @param status
 * @param email
 * @param address
 * @param token
 * @param organizationId
 */
export const saveUserDataLocal = ({wallet, id, code, status, email, address, confirmed}, token, organizationId) => {
	localStorage.setItem(`${KEYS.TOKEN}${organizationId}`, token)
	localStorage.setItem(`${KEYS.USER_WALLET}${organizationId}`, wallet)
	localStorage.setItem(`${KEYS.USER_ID}${organizationId}`, id)
	localStorage.setItem(`${KEYS.USER_CODE}${organizationId}`, code)
	localStorage.setItem(`${KEYS.USER_STATUS}${organizationId}`, status)
	localStorage.setItem(`${KEYS.USER_EMAIL}${organizationId}`, email)
	localStorage.setItem(`${KEYS.USER_ADDRESS}${organizationId}`, address)
	localStorage.setItem(`${KEYS.USER_CONFIRMED}${organizationId}`, confirmed)
}

/**
 *
 * @return {{wallet: string, code: string, address: string, id: string, email: string, token: string, status: string}}
 */
export const getUserDataLocal = () => {
	const organizationId = settingsConfig.ORGANIZATION_ID
	const wallet = localStorage.getItem(`${KEYS.USER_WALLET}${organizationId}`)
	const token = localStorage.getItem(`${KEYS.TOKEN}${organizationId}`)
	const code = localStorage.getItem(`${KEYS.USER_CODE}${organizationId}`)
	const status = localStorage.getItem(`${KEYS.USER_STATUS}${organizationId}`)
	const id = localStorage.getItem(`${KEYS.USER_ID}${organizationId}`)
	const address = localStorage.getItem(`${KEYS.USER_ADDRESS}${organizationId}`)
	const email = localStorage.getItem(`${KEYS.USER_EMAIL}${organizationId}`)
	const confirmed = localStorage.getItem(`${KEYS.USER_CONFIRMED}${organizationId}`) === "true"
	return ({wallet, token, code, status, id, address, email, confirmed})
}

export const getLocalOrganizationData = () => {
	const organizationId = settingsConfig.ORGANIZATION_ID
	const label = localStorage.getItem(`${ORG_KEYS.LABEL}${organizationId}`)
	const icon = localStorage.getItem(`${ORG_KEYS.ICON}${organizationId}`)
	const id = localStorage.getItem(`${ORG_KEYS.ID}${organizationId}`)
	const prefix = localStorage.getItem(`${ORG_KEYS.PREFIX}${organizationId}`)
	return ({label, icon, id, prefix})
}

export const saveOrganizationContent = ({label, icon, id, prefix}) => {
	localStorage.setItem(`${ORG_KEYS.LABEL}${id}`, label)
	localStorage.setItem(`${ORG_KEYS.ICON}${id}`, icon)
	localStorage.setItem(`${ORG_KEYS.ID}${id}`, id)
	localStorage.setItem(`${ORG_KEYS.PREFIX}${id}`, prefix)
}

export const getAuthToken = (organizationId) => {
	return localStorage.getItem(`${KEYS.TOKEN}${organizationId}`)
}

export const cleanUserDataStorage = (organizationId) => {
	console.log("cleanUserDataStorage: ", organizationId)
	for (let key in KEYS) {
		if (KEYS.hasOwnProperty(key)) {
			localStorage.removeItem(`${KEYS[key]}${organizationId}`);
		}
	}
}

