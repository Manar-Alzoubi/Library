import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer.jsx';


const store = createStore(rootReducer, compose(applyMiddleware(thunk)))


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store= {store}>
        <App />
    </Provider>


);
