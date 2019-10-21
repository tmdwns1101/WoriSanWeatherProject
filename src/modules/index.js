import { combineReducers } from "redux";
import townWeather, { TownWeatherSaga } from "./townWeather/townWeather";
import mountainWeather, {MountainWeatherSaga} from "./mountainWeather/mountainWeather";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  townWeather,
  mountainWeather
});
export function* rootSaga() {
  yield all([TownWeatherSaga(), MountainWeatherSaga()]);
}

export default rootReducer;