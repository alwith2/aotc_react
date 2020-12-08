import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
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
    NavbarText
} from 'reactstrap';

function NavBar({ bearer, setBearer }) {

    // const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function Logout() {
        const url = "http://localhost:8000/logout";
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
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Poster</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    {/* <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                    </Nav> */}
                    {bearer.length > 0 && <button onClick={Logout}>Logout</button>}
                </Collapse>
            </Navbar>
        </div>
    );
}
//}

export default NavBar;