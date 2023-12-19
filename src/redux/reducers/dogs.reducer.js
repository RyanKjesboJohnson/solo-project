const dogsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_DOGS':
            return action.payload
    }
}

export default dogsReducer;