import { Fragment } from "react"
import Cart from "./Cart"
import Header from "../Layout/Header/Header"
import Footer from "../Layout/Footer/Footer"

const CartPage = () => {
  return (
    <Fragment>
        <Header />
        <Cart />
        <Footer />
    </Fragment>
  )
}

export default CartPage