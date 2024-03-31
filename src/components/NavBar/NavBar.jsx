import * as userService from "../../utilities/users-service";
import React, { useState } from "react";
import "./NavBar.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function NavBar({ user, setUser }) {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand>MiState</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="active">
              <MDBNavbarLink
                aria-current="page"
                href="/"
                className="nav-link-underline-animation"
              >
                | Home |
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/entries/new"
                className="nav-link-underline-animation"
              >
                | New Entry |
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/entries"
                className="nav-link-underline-animation"
              >
                | My Week |
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/everyone"
                className="nav-link-underline-animation"
              >
                | Everyone Else's Week |
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="justify-content-end">
            <MDBNavbarItem>
              <MDBNavbarLink
                href=""
                className="nav-link-underline-animation"
                onClick={handleLogOut}
              >
                Log Out
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

//   <nav className="navbar bg-light">
//   <Link to="/entries">My Week</Link>
//   &nbsp; || &nbsp;
//   <Link to="/entries/new">New Entry</Link>
//   &nbsp;&nbsp;
//   <span>How are you {user.name}?</span>
//   &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
// </nav>
