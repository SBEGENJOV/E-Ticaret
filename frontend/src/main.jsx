import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartProvider.jsx";
import { Layout } from "./layout/Layout.jsx";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
