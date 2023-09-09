import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Add from "./components/Add";
import Update from "./components/Update";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import appReducer from "../src/redux/reducers/appReducer"

const store = createStore(appReducer, composeWithDevTools());

function App() {
  return (
    <div>
          <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
