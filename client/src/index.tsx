import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { store } from './app/store'
import { Provider } from 'react-redux'
import "antd/dist/antd.min.css";

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
