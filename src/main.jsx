import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import Router from "./Routes/Routers.jsx";
// import FormComponent from "./components/Forms/RegisterForm.jsx";
import { CounterProvider } from "./Context/CounterContext.jsx";
import { CartProvider } from "./Context/cartContext.jsx";
// import RTKmain from "./redux-toolkit/RTKmain.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <CounterProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </CounterProvider>
      {/* <FormComponent /> */}
    </Provider>
    {/* <RTKmain /> */}
  </React.StrictMode>
);
