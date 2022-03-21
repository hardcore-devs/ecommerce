import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Signin = ({onLogin}) =>{
    const [enteredEmail,setEnteredEmail]=useState("");
    const [enteredPassword,setEnteredPassword] = useState("")

    const onEmailChange = (event)=>{
        setEnteredEmail(event.target.value)
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
                username: enteredEmail,
                password: enteredPassword
            })
        })
        .then(res=>res.json())
        .then(user=> {
            if (user.id){
                onLogin(user.id)
            }
        })
        .catch(err=>console.log(err))
    }
    return(
        <div className="container position-absolute top-50 start-50 translate-middle shadow p-4 rounded text-start" style={{"width":"30rem"}}>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="d-flex justify-content-around">
                <Button variant="dark" type="submit">
                    Sign in
                </Button>
                <Button variant="dark" onClick={onSigninSubmit}>Sign Up</Button>
                </div>
                
            </Form>
        </div>
    )
}

export default Signin;