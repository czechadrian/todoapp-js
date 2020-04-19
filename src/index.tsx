import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom";

import { Todo } from "app/todo";
import configureStore from "app/store/configure-store";

const store = configureStore(undefined);
const rootEl = document.getElementById("root");

export type Dispatch = typeof store.dispatch;
ReactDOM.render(<Todo store={store} />, rootEl);
