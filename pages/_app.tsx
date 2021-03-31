import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../app/store";
import Logo from "../components/_ui/logo";
import "../styles/_global.scss";
import "../styles/_reset.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Logo />} persistor={persistor}>
        <SkeletonTheme color="#ffffff" highlightColor="#444">
          <Component {...pageProps} />
        </SkeletonTheme>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
