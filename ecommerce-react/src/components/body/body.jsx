import ProductList from "./products/ProductList";

const Body = ({products, onProductClick,addToCart,addToFav}) => {

    
    return(
        <div>
          <div className="nav-space">

          </div>
            <header className="bg-dark py-5">
              <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                  <h1 className="display-4 fw-bolder">Shop Everything</h1>
                  <p className="lead fw-normal text-white-50 mb-0">Get your next thing here</p>
                </div>
              </div>
            </header>
            <section className="d-flex">
                <ProductList products={products} onProductClick={onProductClick} addToCart={addToCart} addToFav={addToFav}/>
            </section>
        </div>
    )

}

export default Body;