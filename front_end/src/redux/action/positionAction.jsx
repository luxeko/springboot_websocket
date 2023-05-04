export const addPosition = (data) => {
    return {
        type: "ADD_POSITION",
        payload: {
            data: data,
        }
    }
}