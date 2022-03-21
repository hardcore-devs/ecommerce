import "./App.css";
import NavBarP from "./components/NavBarP/NavBarP";
import Body from "./components/body/body";
// import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "./components/signin/Signin";
import Product from "./components/body/products/Product";
import Profile from "./components/profile/Profile";
import Checkout from "./components/checkout/Checkout";

function App() {
  // states
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [userId,setUserId] = useState("");
  const [cart,setCart] = useState([1,2,3]);
  const [actualProductId, setActualProductId] = useState("");
  const [favorites,setFavorites] = useState([]);
  const [totalValue, setTotalValue] = useState("")

  // handlers
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

  const onAddToCart = (itemId)=>{
    setCart(previousCartState=>{
      return [...previousCartState,itemId]
    })
  }
  const onRemoveFromCart = itemId=>{
    setCart((previousCartState)=>{
      return previousCartState.filter((id)=>{return id !==itemId})
    })
  };
  const onAddToFav = itemId =>{
    setFavorites(previousFavState=>{
      return [...previousFavState,itemId]
    })
  };
  const onRemoveFromFav = itemId=>{
    setFavorites((previousFavState)=>{
      return previousFavState.filter((id)=>{return id !==itemId})
    })
  };


  //catch products and fill productsstate
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  //
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchField.toLowerCase());
  });
  //
  return (
    <div className="App text-center">
      <NavBarP 
        onSearchChange={onSearchChange} 
        searchField={searchField} 
        isLogin={isLogin} 
        cart={cart} 
        rmCartItem={onRemoveFromCart}
        totalValue={totalValue}
      />

      <Routes>

        <Route path="/" 
          element={<Body 
            products={filteredProducts} 
            onProductClick={onProductClick} 
            addToCart={onAddToCart} 
            addToFav={onAddToFav} /> 
          }
        />

        <Route path="/signin" 
          element={
            <Signin 
              onLogin={onLogin}
            />
          } 
        />

        <Route path="/product/:id" 
          element={
            <Product 
              id={actualProductId} 
              onAddToCart={onAddToCart}
            />
          } 
        />

        <Route path="/profile/" 
          element={
            <Profile 
              userId={userId}
            />
          }
        />

        <Route path="/checkout" 
          element={
            <Checkout 
            cart={cart} 
            userId={userId} 
            rmCartItem={onRemoveFromCart} 
            totalValue={totalValue}
            />
          }
        />

      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
