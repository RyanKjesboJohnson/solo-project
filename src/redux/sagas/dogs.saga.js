import axios from "axios";
import { takeLatest } from "redux-saga/effects";
import { put } from "redux-saga/effects";

//This saga function adds a dog to the detabase.
//The header element is used by the cloudinary middleware.
//This action originates from the add dog page via the admin page.
function* addDog(action){
  try {
    const headers = {
      'content-type' : 'multipart/form-data'
    }
    const response = yield axios({
      method: "POST",
      url: "api/upload",
      headers: headers,
      data: action.payload
    });
    console.log(action.payload);
  } catch(error) {
    console.log('addDog error:', error);
  }
}

//This saga function removes a dog from the database.
//This is triggered from the Admin page.
function* deleteDog(action) {
  try {
    const dogID = action.payload;
    console.log(dogID);
    yield axios.delete(`/api/dogs/${dogID}`)
  } catch (error) {
    console.log('deleteDog error:', error);
  }
}

//This saga function fetches dogs from the database, and
//puts them in the dogs reducer.
//This is triggered as an onEffect of the dog profile page.
function* fetchAllDogs() {
  try {
    const dogsResponse = yield axios.get('/api/dogs');
    yield put({
      type: 'SET_DOGS',
      payload: dogsResponse.data
      });
      console.log(dogsResponse.data);
    } catch (error) {
      console.log('fetchAllDogs error:', error);
  }
}

//This saga function gets an individual dogs info from the DB.
//Puts this in the editDog reducer.
//This is pulled in the editDog function when the page loads.
function* fetchDog(dogID) {
  try {
    const dogsResponse = yield axios.get(`/api/dogs/${dogID.payload.id}`);
    yield put({
      type: 'SET_DOG',
      payload: dogsResponse.data
      });
  } catch (error) {
      console.log('fetchDog error:', error);
  }
}

// function* updateDog(action) {
//   try {
//     const response = yield axios({
//       method: "PUT",
//       url: `/api/dogs/${dogID}`,

//     });
    
//   }

// }


function* dogsSaga() {
    yield takeLatest('FETCH_ALL_DOGS', fetchAllDogs),
    yield takeLatest('FETCH_DOG', fetchDog)
    yield takeLatest('DELETE_DOG', deleteDog),
    yield takeLatest('ADD_DOG', addDog)
  }

export default dogsSaga;