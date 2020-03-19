import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	// switch preferred language
	switchPreferredLanguage: ['language'],
});

export const DMTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
	authToken: null,
	preferredLanguage: null,
	user: null
};

/* ------------- Reducers ------------- */

export const switchPreferredLanguage = (state, { language }) => {
	return {
		...state,
		preferredLanguage: language
	};
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.SWITCH_PREFERRED_LANGUAGE]: switchPreferredLanguage
});
