import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { AppContextProvider } from "./Context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
