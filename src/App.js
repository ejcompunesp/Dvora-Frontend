import React from "react";

import { Provider } from "react-redux";
import AppRoutes from "./app.routes";
import "./index.css";

import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
