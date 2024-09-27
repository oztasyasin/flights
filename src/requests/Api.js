import axios from 'axios';
export const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const APP_ID = process.env.EXPO_PUBLIC_APPLICATION_ID;
export const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
export const RESOURCE_VERSION = process.env.EXPO_PUBLIC_RESOURCE_VERSION;
const Api = axios.create({
	baseURL: API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'app_id': APP_ID,
		'app_key': API_KEY,
		"ResourceVersion": RESOURCE_VERSION
	},
});

Api.interceptors.request.use(async (config) => {
	const apiConfig = config;
	return apiConfig;
});


Api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default Api;