import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
    Col,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Row,
    Container
} from 'reactstrap';

function NavBar({ bearer, setBearer }) {

    // const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function Logout() {
        //const url = "http://localhost:8000/logout";
        const url = "https://aotc-laravel.herokuapp.com/logout";
        const method = "get";
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${bearer}`
        };
        console.log({ bearer });
        axios({
            url,
            method,
            headers,
        })
            .then(res => {
                setBearer("")
                console.log(res)
            })

            .catch(err => console.log('error: ', err))
    }


    return (
        <div>
            <Navbar style={{ backgroundColor: "#355834" }} light expand="md">
                <Container>
                    <Row className="justify-content-around">
                        <Col>
                            <NavbarBrand style= {{ fontFamily:"verdana", color:"white"}}>Poster</NavbarBrand>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="nav">
                            {bearer.length > 0 && <Button style= {{ fontFamily:"verdana"}}className="btn btn-primary" onClick={Logout}>Logout</Button>}
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;