// Selectors to help prevent duplication of the same logic
// Selectors help with querying data from state

export const getPreferredLanguage = (state) => {
	return state.app.preferredLanguage;
};
