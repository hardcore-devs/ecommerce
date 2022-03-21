import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Signin = ({onLogin}) =>{
    const [enteredUsername,setEnteredUsername]=useState("");
    const [enteredPassword,setEnteredPassword] = useState("")

    const onUsernameChange = (event)=>{
        setEnteredUsername(event.target.value)
    }
    const onPasswordChange = (event)=>{
        setEnteredPassword(event.target.value)
    }

    const onSigninSubmit = (email,password)=>{
        fetch('https://fakestoreapi.com/auth/login',
        {
            method: "POST",
            headers: {'Content-Type':'Application/json'},
            body: JSON.stringify({
                username: enteredUsername,
                password: enteredPassword
            })
        })
        .then(res=>res.json())
        .then(json=> console.log(json))
        //     if (user.id){
        //         onLogin(user.id)
        //     } else {
        //         console.log("user dont exist")
        //     }
        // })
        // .catch(err=>console.log(err))
    }
    return(
        <div className="container position-absolute top-50 start-50 translate-middle shadow p-4 rounded text-start" style={{"width":"30rem"}}>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="name" placeholder="Enter username" onChange={onUsernameChange}/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="d-flex justify-content-around">
                <Button variant="dark"  onClick={onSigninSubmit}>
                    Sign in
                </Button>
                <Button variant="dark" ><a href="register">Register</a></Button>
                </div>
                
            </Form>
        </div>
    )
}

export default Signin;