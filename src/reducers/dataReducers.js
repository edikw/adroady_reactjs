
const initialState = [];
const data = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DATA':
		return action.data
		default:
		return state
	}
}

export default data;