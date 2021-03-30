import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/_index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
