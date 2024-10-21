import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Clouditecture Logo" className="logo" />
          <h1 className="title">Clouditecture</h1>
        </div>
        <ul className="nav-items">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="menu-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="menu-item">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;