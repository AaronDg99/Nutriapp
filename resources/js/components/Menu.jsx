import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { json, Link, Outlet } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Menu() {
  const isLoggedIn = Cookies.get("isLoggedIn");
  const username = Cookies.get("username");
  const navigate = useNavigate();

  const logOut = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("username");
    Cookies.remove("token");
    navigate("/login");
    swal("Sesión cerrada", "Haz cerrado sesión!", "success");
  };

  return (
    <>
      <div
        className="m-banner"
        style={{
          background: "black",
          display: "block",
          textAlign: "center",
          color: "white",
        }}
      >
        <span>TU SALUD ES LO PRIMERO</span>
      </div>

      <Navbar style={{ background: "#f5f5f5" }} expand="lg">
        <Navbar.Brand style={{ paddingLeft: "30px" }} as={Link} to="/">
          <img src="https://dieteticaynutricionweb.files.wordpress.com/2017/01/cropped-promocion-11.png" 
          style={{ width: "100px", height: "auto", borderRadius: "5px" }}/>
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {isLoggedIn && (
                <>
                  <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      {username && username.toUpperCase()}
                      <noframes></noframes>
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logOut}>
                      Cerrar sesion
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
              {!isLoggedIn && (
                <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="login">
                    Iniciar Sesión<noframes></noframes>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="register">
                    Registro
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default Menu;
