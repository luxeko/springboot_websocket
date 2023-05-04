const INITIAL_STATE = {
    positions: []
}
const positionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_POSITION":
            return {
                ...state,
                positions: [...state.positions, action.payload.data]
            }
        default:
            return state;
    }
}

export default positionReducer