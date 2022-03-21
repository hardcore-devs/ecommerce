import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Profile = ({userId})=>{
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState({firstname:"",lastname:""});
    const [address,setAddress]=useState({
        city:"",
        street:"",
        number:"",
        zipcode:"",
        geolocation:{lat:"",long:""}
    });
    const [phone,setPhone]=useState("");


    useEffect(()=>{
        fetch(`https://fakestoreapi.com/users/${userId}`)
            .then(res=>res.json())
            .then(json=>console.log(json))
    })
    return(
        <div>
            <Row><Col>{name.firstname}</Col><Col>{name.firstname}</Col></Row>
        </div>
    )
}
export default Profile;