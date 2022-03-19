import ProductList from "./products/ProductList";

const Body = ({products, onProductClick}) => {

    
    return(
        <div>
          <div className="p-2">

          </div>
            <header class="bg-dark py-5">
              <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                  <h1 class="display-4 fw-bolder">Shop Everything</h1>
                  <p class="lead fw-normal text-white-50 mb-0">Get your next thing here</p>
                </div>
              </div>
            </header>
            <section className="d-flex">
                <ProductList products={products} onProductClick={onProductClick}/>
            </section>
        </div>
    )

}

export default Body;