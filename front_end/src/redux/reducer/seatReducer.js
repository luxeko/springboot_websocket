const INITIAL_STATE = {
    seats: [], // {id, name, description, price, img, qty}
    countSeat: 0
};

const seatReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                seats: [...state.seats, action.payload.data],
                countSeat: state.countSeat + 1
            }
        case "DECREMENT":
            return {
                ...state,
                seats: state.seats.filter(item => item.id != action.payload.id),
                countSeat: state.countSeat - 1
            }
        default:
            return state;
    }
}

export default seatReducer