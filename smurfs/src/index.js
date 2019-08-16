import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore} from 'redux';
import {reducer} from './reducers';
import {Provider} from 'react-redux';



const store = createStore(reducer)

ReactDOM.render(
<App store = {store }/>, document.getElementById("root"));
