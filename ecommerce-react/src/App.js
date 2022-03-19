
import './App.css';
import NavBarP from './components/NavBarP/NavBarP';
import Body from './components/body/body';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';


import Signin from './components/signin/Signin';
import Product from './components/body/products/Product';

function App() {
  const [products,setProducts]=useState([]);
  const [searchField,setSearchField]=useState("");

  const [actualProductId,setActualProductId] = useState("");
  
const onSearchChange = (event) => {
    setSearchField(event)
}

 const onProductClick = (id)=>{
   setActualProductId(id)

 }
  

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
  },[])
  const filteredProducts = products.filter(product=>{
    return product.title.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    
    <div className="App text-center">
      <NavBarP onSearchChange={onSearchChange} searchField={searchField}/>
      <Routes>
        <Route path="/" element={<Body products={filteredProducts} onProductClick={onProductClick}/>} />
        <Route path="/signin" element={<Signin />} />
        <Route  path ="/product/:id" element={<Product id={actualProductId}/>}/>
      </Routes>
      

      <Footer/>
    </div>
  );
}

export default App;
