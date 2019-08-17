import React from "react";
import './Header.scss';
import logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <h4> Hello, World! </h4>
      </div>
    );
  }
}

export default Header;