import * as mountainWeatherAPI from "../../apis/mountainWeatherAPI";
import { takeEvery,put, call } from "redux-saga/effects";

const GET_DATA = "mountainWeather/GET_DATA";
const GET_DATA_SUCCESS = "mountainWeather/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "mountainWeather/GET_DATA_ERROR";

export const getData = () => ({type: GET_DATA});


function* getDataSaga () {
    try {
      const response = yield call(mountainWeatherAPI.getMountainWeather);
	  
      yield put({
        type: GET_DATA_SUCCESS,
        payload: response
      });
    } catch (e) {
      yield put({
        type: GET_DATA_ERROR,
        payload: e,
        error: true
      });
 
  };
}

export function* MountainWeatherSaga() {
	yield takeEvery(GET_DATA, getDataSaga)
}

const initState = {
	loading: false,
	data: null,
	error: null
}

export default function mountainWeather (state = initState, action) {
	switch(action.type){
		case GET_DATA: 
			return {
				loading: true,
				data: null,
				error: null
			}
		case GET_DATA_SUCCESS:
			return {
				loading: false,
				data: action.payload,
				error: null
			}
		case GET_DATA_ERROR:
			return {
				loading: false,
				data: null,
				error: action.payload
			}
		default:
			return state
	}
}
