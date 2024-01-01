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
import CreateCategoryPage from "./Pages/admin/Categories/CreateCategoryPage ";

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
      <Route path="/admin/*">
        <Route path="users" element={<AdminUserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
