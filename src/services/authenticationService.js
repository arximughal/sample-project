import API from './index';

function login(params) {
	console.log(params);
	const options = {
		method: 'POST',
		headers: {
			'X-localization': `${params.data.language}`
		}
	};
	const data = {
		phone: params.data.email,
		password: params.data.password
	};
	
	return API.post('/login', data, options)
		.then((result) => {
			return result;
		})
		.catch((error) => {
			throw error.response
		});
}

export const authenticationService = {
	login
};
