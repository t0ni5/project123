import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LineHeader from "./LineHeader";
import PersonOfTheDay from "./PersonOfTheDay";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <LineHeader />
      <Navbar expand="lg" className="footer-menu">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 center-footer "
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Link to="/home">{t("footer.mainpage")}</Link>
              <Link to="/robbers">{t("footer.robberspage")}</Link>
              <Link to="/#daily_name">{t("footer.robberday")}</Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Navbar.Brand href="#">
                        
                    </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
