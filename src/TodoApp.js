import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem} from "reactstrap";
import AppRoutes, {routeLinks} from "./AppRoutes";
import "./styles.scss";
function TodoApp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="todo-app">
      <header className="App-header">
        <Navbar light expand="md">
          <NavbarBrand href="/">React redux</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {Object.keys(routeLinks).map((key) => {
                const {name, path, hideInNav} = routeLinks[key];
                if (!hideInNav)
                  return (
                    <NavItem key={key}>
                      <Link className="nav-link" to={path}>
                        {name}
                      </Link>
                    </NavItem>
                  );
                return null;
              })}
            </Nav>
            <NavbarText>BSS</NavbarText>
          </Collapse>
        </Navbar>
      </header>
      <AppRoutes />
    </div>
  );
}

export default TodoApp;
