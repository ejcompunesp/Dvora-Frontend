import React from "react";

import { Provider } from "react-redux";
import AppRoutes from "./app.routes";
import "./index.css";

import store from "./store";

import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
