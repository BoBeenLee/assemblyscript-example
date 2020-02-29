import React from "react";
import { compose } from "recompose";

import { getRootStore } from "src/stores/Store";
import withStore from "src/hocs/withStore";
import { isProduction } from "src/configs/env";
import { setupReactotron } from "ReactotronConfig";

import "src/styles/global.css";

const store = getRootStore();

if (!isProduction()) {
  setupReactotron(store);
}

export const wrapPageElement = ({ element }) => {
  return element;
};

export const wrapRootElement = ({ element }) => {
  store.initializeApp();

  const enhanceElement = compose(withStore(store))(element);

  return enhanceElement;
};
