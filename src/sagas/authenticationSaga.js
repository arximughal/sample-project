import { put, call } from 'redux-saga/effects';
import Creators from '../state/AppRedux';
import { authenticationService } from '../services/authenticationService';

export function * authenticate(data) {
	// enable loading indicator
	yield put(Creators.loggingIn());
	
	let authenticationResult = null;
	try {
		authenticationResult = yield call(authenticationService.login, data);
		console.log(authenticationResult);
		if (authenticationResult.data.response) {
			console.log('inside ifffff');
			yield put(Creators.loginSuccessful(authenticationResult.data.response));
		}
	} catch (e) {
		console.log(e);
		if (e.status === 401) {
			yield put(Creators.logout());
		}
		const validationMessages = e.data.response;
		yield put(Creators.loginFailed(validationMessages));
	}
}
