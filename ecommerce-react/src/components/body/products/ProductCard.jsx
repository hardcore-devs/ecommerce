import "./ProductCard.css"
import {Card,ListGroup, ListGroupItem} from "react-bootstrap"


const ProductCard = ({id,image,title,category,price,rate, count, onProductClick}) =>{
    
    
    return(
        <Card style={{ "width": '18rem', "padding":"2rem" }} className="p-2 m-2" >
            <Card.Img variant="top" src={image} className="card-img p-2 " />
            <Card.Body>
                <Card.Title>
                    <a href={"/product/"+id} onClick={()=>onProductClick(id)}>
                    {title}
                    </a>
                </Card.Title>
                {/* <Card.Text>{description}
                </Card.Text> */}
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{category}</ListGroupItem>
                <ListGroupItem>Rate: {rate}| Votes: {count}</ListGroupItem>
                
                <ListGroupItem>Price: ${price}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Add to Cart</Card.Link>
                <Card.Link href="#">Add to Favorites</Card.Link>
            </Card.Body>
            </Card>
    )
}
export default ProductCard;