import ProductCard from "./ProductCard";
import "./ProductList.css"

const ProductList = ({products,onProductClick}) =>{
    const cardComponent=  products.map((user, i) => {
        return (
            
            <ProductCard
            key={i}
            id={products[i].id}
            title={products[i].title}
            image={products[i].image}
            rate={products[i].rating.rate}
            count={products[i].rating.count}
            
            category={products[i].category}
            price={products[i].price}
            onProductClick={onProductClick}
            />
        );
    })
    
    return(
        <div className="list">
            {cardComponent}
        </div>
    )
}
export default ProductList;