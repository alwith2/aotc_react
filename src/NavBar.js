import React, { useState, useContext } from 'react';
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

function NavBar() {

    // const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

// function Logout(){
//     const context = useContext(AppContext);
//     function clickHandle(){
//         localStorage.clear();
//         context.setToken('');
//         console.log("logged out")
//     }
//}

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
                    {/* <button onClick={clickHandle}>Logout</button> */}
                </Collapse>
            </Navbar>
        </div>
    );
}
//}

export default NavBar;