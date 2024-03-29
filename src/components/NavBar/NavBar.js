import {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {Navbar, Nav,Container} from 'react-bootstrap';
import "./styles/navbar.css";
import logo from './assets/img/logo.svg';
import linkedin from './assets/img/linkedin.svg';
import github from './assets/img/github.svg';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50 ? true : false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

    return (
      <Router>
        <Navbar expand='md'className={ scrolled ? 'scrolled' : ''}>
          <Container>
            <Navbar.Brand href='/'>
              <img src={logo} alt='Logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
               <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>  
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href='#skills'className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href='#projects'className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                <a href="https://www.linkedin.com/in/camila-lopes-dev/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedInLogo" /></a>
                <a href="https://github.com/Camilacslopes" target="_blank" rel="noopener noreferrer"><img src={github} alt="GithubLogo" /></a>
                </div>
                <HashLink to='#connect'>
                  <button className='vvd'><span>Let's Connect</span></button>
                </HashLink>  
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>  
    )
}