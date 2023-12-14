import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage  from "./component/Pages/HomePage"
import ShopPage  from "./component/Pages/ShopPage"
import ContactPage  from "./component/Contact/Contact"
import BlogDetailsPage from "./component/Pages/BlogDetailsPage"
import ProductDetailsPage from "./component/Pages/ProductDetailsPage "
import AuthPage from "./component/Pages/AuthPage"
import CartPage from "./component/Cart/CartPage "
import Blogs from "./component/Blog/Blog"


function App() {
    return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/auth" element={<AuthPage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/product/:id" element={<ProductDetailsPage/>}/>
      <Route path="/blog/:id" element={<BlogDetailsPage/>}/>
      <Route path="/blog" element={<Blogs/>}/>
    </Routes>
  )
}

export default App
