import { memo } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Header.module.scss';
function Header() {
  const logoImage = '/assets/images/logo.png';
  const searchImage = '/assets/images/Search.png';
  return (
    <>
      <div className={styles.Header}>
        <Navbar variant="dark" expand="lg">
          <div className="container-fluid">
            <Navbar.Brand href="#">
              <img src={logoImage} alt="Sinha Academy" height="50" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={styles.MenuWrap}>
                <Nav.Link className={styles.NavLink} href="/">
                  Home
                </Nav.Link>
                <Nav.Link className={styles.NavLink} href="learning">
                  Learning
                </Nav.Link>
                <Nav.Link className={styles.NavLink} href="feedback">
                  Feedback
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className={styles.SearchWrap}>
              <input type="text" placeholder="Search Here" className={styles.FormControl} />
              <div className={styles.SearchIc}>
                <img src={searchImage} alt="Search" height="20" />
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default memo(Header);
