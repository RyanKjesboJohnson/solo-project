const editDogReducer = (state = {}, action) => {
    if (action.type === 'SET_DOG') {
        return action.payload
    } else if (action.type === 'UPDATE_DOG_NAME'){
        const newName = action.payload
        return {...state, dog_name:newName}
    } else if (action.type === 'UPDATE_DOG_SH_DESC'){
        const newShDescr = action.payload
        return {...state, dog_sh_descr:newShDescr}
    } else if (action.type === 'UPDATE_DOG_LG_DESC'){
        const newLgDescr = action.payload
        return {...state, dog_lg_descr: newLgDescr}
    } else if (action.type === 'CLEAR_DOG') {
        return state = {}
    }
    return state;
}

export default editDogReducer;