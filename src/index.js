import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules/index";



const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
	rootReducer,
	applyMiddleware(
		sagaMiddleWare
	)
);
console.log(store);
sagaMiddleWare.run(rootSaga);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
