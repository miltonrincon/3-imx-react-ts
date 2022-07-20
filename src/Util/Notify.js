import {toast} from "react-toastify";

const success = (message) => {
	toast.success(message, {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
	});
}

const error = (message) => {
	toast.error(message, {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
	});
}

const warning = (message) => {
	toast.warning(message, {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
	});
}

export const Notify = {success, error, warning}