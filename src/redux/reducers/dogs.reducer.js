const dogsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_DOGS':
            return action.payload
        default:
            return state;
    }
}

export default dogsReducer;