import { createStore } from "redux";

import rootReducer from "./reducers";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;