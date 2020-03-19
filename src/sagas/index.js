import { takeLatest, all } from 'redux-saga/effects';
import { DMTypes } from '../state/AppRedux';
import { authenticate } from './authenticationSaga';

export default function * root () {
	yield all([
		takeLatest(DMTypes.AUTHENTICATE, authenticate)
	])
}

