import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StoreContextProvider from "./context/StoreContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import ProductContextProvider from "./context/ProductContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
