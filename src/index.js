import "materialize-css/dist/css/materialize.min.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./pages/App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import "./responsive.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
