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

function NavBar({bearer}) {

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
            axios({
                url,
                method,
                headers,
            })
    }


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Poster</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                    </Nav>
                    <button onClick={Logout}>Logout</button>
                </Collapse>
            </Navbar>
        </div>
    );
}
//}

export default NavBar;