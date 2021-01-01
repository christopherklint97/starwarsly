import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistedStore } from "./store";

/**
 * Renders the app in the Persist Gate needed for Redux Persist and the
 * Provider for the Redux Stoe
 */
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
