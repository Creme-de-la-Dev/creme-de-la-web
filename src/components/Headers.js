import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
        <div>
      <Navbar
        expand="md"
      >
        <NavbarBrand href="/">
          Creme de la Nage
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="mr-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/shows/">
                Séries
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/games/">
                Jogos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/store/">
                Loja
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">
                Sobre nós
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
      )
}

export default Headers;