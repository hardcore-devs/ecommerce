import "./App.css";

import { useEffect, useState } from "react";

import Signin from "./components/signin/Signin";
import Product from "./components/body/products/Product";
import Profile from "./components/profile/Profile";
import Checkout from "./components/checkout/Checkout";
import Signup from "./components/singup/Signup";
import NavBarP from "./components/NavBarP/NavBarP";
import Body from "./components/body/body";
// import Footer from "./components/Footer/Footer";

function App() {
  // states
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [userId, setUserId] = useState(null);

  const [cart, setCart] = useState({
    id: 2,
    userid: 1,
    date: "string",
    products: [
      {
        productId: 2,
        quantity: 2,
      },
      { productId: 5, quantity: 3 },
    ],
  });
  const [actualProductId, setActualProductId] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [totalValue, setTotalValue] = useState(0.0);

  const [route, setRoute] = useState("home");

  // const carrinho = {
  //   id: 2,
  //   userid: 1,
  //   date: "string",
  //   products: [
  //     {
  //       productId: 2,
  //       quantity: 2,
  //     },
  //     { productId: 5, quantity: 3 },
  //   ],
  // };

  // handlers
  const onLogin = (userid) => {
    setUserId(userid);
    setLogin(true);
    onRouteChange("home");
  };
  const onLogout = () => {
    setUserId(null);
    setLogin(false);
    onRouteChange("home");
  };
  const onRouteChange = (event) => {
    setRoute(event);
  };

  const onSearchChange = (event) => {
    setSearchField(event);
  };

  const onProductClick = (id) => {
    setActualProductId(id);
    setRoute("product");
  };

  const onAddToCart = (itemId) => {
    setCart((previousCartState) => {
      return [...previousCartState, itemId];
    });
  };
  const onRemoveFromCart = (itemId) => {
    setCart((previousCartState) => {
      return previousCartState.filter((id) => {
        return id !== itemId;
      });
    });
  };
  const onAddToFav = (itemId) => {
    setFavorites((previousFavState) => {
      return [...previousFavState, itemId];
    });
  };
  const onRemoveFromFav = (itemId) => {
    setFavorites((previousFavState) => {
      return previousFavState.filter((id) => {
        return id !== itemId;
      });
    });
  };
  const sumValue = () => {};

  //catch products and fill productsstate
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .then(console.log("getting products"));
    if (isLogin) {
      fetch(`https://fakestoreapi.com/carts/user/${userId}`)
        .then((res) => res.json())
        .then((json) => {
          setCart(json[1]);
        });
    }
  }, [userId, isLogin]);
  console.log(cart);

  //
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchField.toLowerCase()) ||
      product.category.toLowerCase().includes(searchField.toLowerCase())
    );
  });
  //
  return (
    <div className="App text-center">
      {/* <BrowserRouter> */}
      <NavBarP
        onSearchChange={onSearchChange}
        searchField={searchField}
        isLogin={isLogin}
        cart={cart}
        rmCartItem={onRemoveFromCart}
        totalValue={totalValue}
        userId={userId}
        onRouteChange={onRouteChange}
      />
      {
        {
          home: (
            <Body
              products={filteredProducts}
              onProductClick={onProductClick}
              addToCart={onAddToCart}
              addToFav={onAddToFav}
              cart={cart}
            />
          ),
          signin: <Signin onLogin={onLogin} cart={cart} />,
          product: <Product id={actualProductId} onAddToCart={onAddToCart} />,
          profile: <Profile userId={userId} onLogout={onLogout} />,
          checkout: (
            <Checkout
              cart={cart}
              userId={userId}
              rmCartItem={onRemoveFromCart}
              totalValue={totalValue}
              isLogin={isLogin}
            />
          ),
          signup: <Signup />,
        }[route]
      }

      {/* <Routes>
          <Route
            path="/"
            element={
              <Body
                products={filteredProducts}
                onProductClick={onProductClick}
                addToCart={onAddToCart}
                addToFav={onAddToFav}
                cart={cart}
              />
            }
          />
          <Route
            path="signin"
            element={<Signin onLogin={onLogin} cart={cart} />}
          />
          <Route
            path="product/:id"
            element={<Product id={actualProductId} onAddToCart={onAddToCart} />}
          />
          <Route path="profile" element={<Profile userId={userId} />} />
          <Route
            path="checkout"
            element={
              <Checkout
                cart={cart}
                userId={userId}
                rmCartItem={onRemoveFromCart}
                totalValue={totalValue}
                isLogin={isLogin}
              />
            }
          />
          <Route path="register" element={<Signup />} />
        </Routes> */}
      {/* <Footer /> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
