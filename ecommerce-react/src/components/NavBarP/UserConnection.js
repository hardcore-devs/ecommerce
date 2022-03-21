import { Col, NavLink, Row } from "react-bootstrap";

const UserConnection = ({isLogin})=>{

    if (isLogin){
        return(
            <NavLink href='profile'>Profile</NavLink>
        )
    } else {
        return (
            <div>
                <Row >
                    <Col>
                    <NavLink href='signin'>Sign In</NavLink>
                    </Col>
                    
                    <Col>
                        <NavLink href="register">Register</NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
        
      
};
export default UserConnection;