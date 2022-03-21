import "./App.css";
import NavBarP from "./components/NavBarP/NavBarP";
import Body from "./components/body/body";
// import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "./components/signin/Signin";
import Product from "./components/body/products/Product";
import Profile from "./components/profile/Profile";

function App() {
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [userId,setUserId] = useState("");
  const [cart,setCart] = useState([1,2,3]);
  const [actualProductId, setActualProductId] = useState("");

  const onLogin = (userid)=>{
    setUserId(userid)
    setLogin(true)
  }

  const onSearchChange = (event) => {
    setSearchField(event);
  };

  const onProductClick = (id) => {
    setActualProductId(id);
  };

  const onAddToCart = (itemId)=>(previousCartState)=>setCart([...previousCartState,itemId])
  // do this
  const onRemoveFromCart = itemId=>(previousCartState)=>setCart(previousCartState.filter(!itemId));


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);


  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App text-center">
      <NavBarP onSearchChange={onSearchChange} searchField={searchField} isLogin={isLogin} cart={cart} rmCartItem={onRemoveFromCart}/>
      <Routes>
        <Route
          path="/"
          element={
            <Body products={filteredProducts} onProductClick={onProductClick} onAddToCart={onAddToCart} />
          }
        />
        <Route path="/signin" element={<Signin onLogin={onLogin}/>} />
        <Route path="/product/:id" element={<Product id={actualProductId} onAddToCart={onAddToCart}/>} />
        <Route path="/profile/" element={<Profile userId={userId}/>}/>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
