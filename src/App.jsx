import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import  ProductContextProvider from './context/productContext';
import Product from './components/addProduct';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';

function App() {

  return (
    <>
      < ProductContextProvider>
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
    </BrowserRouter>
    
      </ProductContextProvider>
      
    </>
  )
}

export default App
