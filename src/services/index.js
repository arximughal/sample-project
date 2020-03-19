import axios from 'axios';

export default axios.create({
	baseURL: `${process.env.GATSBY_API_URL}api`,
	timeout: 30000,
	headers: {
		'Accept': 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
});
