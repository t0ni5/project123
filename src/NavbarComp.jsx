import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import lupa from "./assets/lupa.png";
import Developer from './Developer';
import MainPage from "./MainPage";
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

function NavbarComp(){
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };
    return (
        
        <Navbar expand="lg" className="navbar">
            <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                    >
                    <Nav.Link href='/home'>{t('header.mainpage')}</Nav.Link>
                    <Nav.Link href='/robbers'>{t('header.robberspage')}</Nav.Link>
                    <Nav.Link href="/#devs">{t('header.devpage')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#scrollspySearch">
                    <img className='lupe'
                        src = {lupa} 
                        alt = "search"
                        height = "80%"
                        width = "80%"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <div className="ru-eng-container">
                    <button type="button" class="langbtn btn btn-warning btn-lg" onClick={() => changeLanguage('ru')}>RU</button>
                    <button type="button" class="langbtn btn btn-secondary btn-lg" onClick={() => changeLanguage('en')}>EN</button>
                </div>    
            </Container>
        </Navbar>

       
    )    
}

export default NavbarComp
