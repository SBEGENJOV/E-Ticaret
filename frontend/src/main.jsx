import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider.jsx';
import MainLayout from './layout/MainLayout.jsx'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <CartProvider>
    <MainLayout >
    <App />
    </MainLayout>
   </CartProvider>
   </BrowserRouter>
   
)   
