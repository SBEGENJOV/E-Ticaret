import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./component/Contact/Contact";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage ";
import AuthPage from "./Pages/AuthPage";
import CartPage from "./component/Cart/CartPage ";
import Blogs from "./component/Blog/Blog";
import AdminUserPage from "./Pages/Admin/AdminUserPage";
import CategoryPage from "./Pages/admin/Categories/CategoryPage";
import UpdateCategoryPage from "./Pages/admin/Categories/UpdateCategoryPage";
import UpdateLogoPage from "./Pages/admin/Logo/UpdateLogoPage";
import CreateCategoryPage from "./Pages/admin/Categories/CreateCategoryPage ";
import CreateProductPage from "./Pages/admin/Products/CreateProductPage";
import ProductPage from "./Pages/admin/Products/ProductPage ";
import UpdateProductPage from "./Pages/admin/Products/UpdateProductPage ";
import CouponPage from "./Pages/admin/Coupon/CouponPage";
import CreateCouponPage from "./Pages/admin/Coupon/CreateCouponPage";
import UpdateCouponPage from "./Pages/admin/Coupon/UpdateCouponPage";
import Success from "./Pages/Success";
import OrderPage from "./Pages/admin/OrderPage";
import DashboardPage from "./Pages/admin/DashboardPage";
import LogoPage from "./Pages/admin/Logo/LogoPage";
import CreateLogoPage from "./Pages/admin/Logo/CreateLogoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin/*">
        <Route path="users" element={<AdminUserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="logo" element={<LogoPage />} />
        <Route path="logo/update/:id" element={<UpdateLogoPage />} />
        <Route path="logo/create" element={<CreateLogoPage   />} />
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
