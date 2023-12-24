import axios from "axios";
import { takeLatest } from "redux-saga/effects";
import { put } from "redux-saga/effects";

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

function* deleteDog(action) {
    try {
      const dogID = action.payload;
      console.log(dogID);
      yield axios.delete(`/api/dogs/${dogID}`)
    } catch (error) {
      console.log('deleteDog error:', error);
    }
}

function* dogsSaga() {
    yield takeLatest('FETCH_ALL_DOGS', fetchAllDogs),
    yield takeLatest('DELETE_DOG', deleteDog)
  }

export default dogsSaga;