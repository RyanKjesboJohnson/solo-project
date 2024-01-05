const editDogReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_DOG':
            return action.payload
        default:
            return state;
    }
}

export default editDogReducer;