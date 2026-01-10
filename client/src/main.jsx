import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StoreContextProvider from "./context/StoreContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
