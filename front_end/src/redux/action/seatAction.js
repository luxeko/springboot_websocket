export const increaseSeat = (data) => {
    return {
        type: "INCREMENT",
        payload: {
            data: data,
        }
    }
}
export const decreaseSeat = (id) => {
    return {
        type: "DECREMENT",
        payload: {
            id: id
        }
    }
}