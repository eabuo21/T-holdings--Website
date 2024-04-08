import React from "react";
import "../assets/css/header-footer.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/tlogo.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isDropdownVisible2: false,
      isDropdownVisible3: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuVisible: !prevState.isMenuVisible,
    }));
  };

  toggleDropdown2 = () => {
    this.setState((prevState) => ({
      isDropdownVisible2: !prevState.isDropdownVisible2,
    }));
  };

  toggleDropdown3 = () => {
    this.setState((prevState) => ({
      isDropdownVisible3: !prevState.isDropdownVisible3,
    }));
  };

  handleClickOutside = () => {
    this.setState({
      isDropdownVisible2: false,
      isDropdownVisible3: false,
    });
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  render() {
    const { isMenuVisible, isDropdownVisible2, isDropdownVisible3 } =
      this.state;
    return (
      <header>
        <nav className={`navbar ${isMenuVisible ? "active" : ""}`}>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="T-logo" />
            </Link>
          </div>
          <div className="hamburger" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`navbar-nav ${isMenuVisible ? "active" : ""}`}>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                ABOUT US
              </Link>
            </li>

            <li
              className={`nav-item dropdown ${
                isDropdownVisible2 ? "active" : ""
              }`}
            >
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="dropdownMenu2"
                onClick={this.toggleDropdown2}
                aria-haspopup="true"
                aria-expanded={isDropdownVisible2}
              >
                OUR BUSINESSES
                <span className="arrow down"></span>
              </Link>
              <ul
                className={`dropdown-menu ${
                  isDropdownVisible2 ? "active" : ""
                }`}
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <Link to="/TongstonCollege">T-COLLEGE</Link>
                </li>
                <li>
                  <Link to="/TongstonInstitute">T-INSTITUTE</Link>
                </li>
                <li>
                  <a href="https://t-ventures.tongston.com/" target="_self">
                    T-VENTURES
                  </a>
                </li>
                <li>
                  <a href="https://t-hub.tongston.com/media" target="">
                    T-MEDIA
                  </a>
                </li>
                <li>
                  <Link to="/TongstonHoldings">T-HOLDINGS</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                to="https://t-hub.tongston.com"
                target="_blank"
                className="nav-link"
              >
                TONGSTON HUB
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                TEES 2024
              </Link>
            </li>

            <li
              className={`nav-item dropdown ${
                isDropdownVisible2 ? "active" : ""
              }`}
            >
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="dropdownMenu2"
                onClick={this.toggleDropdown2}
                aria-haspopup="true"
                aria-expanded={isDropdownVisible2}
              >
                INSIGHTS & EVENTS
                <span className="arrow down"></span>
              </Link>
              <ul
                className={`dropdown-menu ${
                  isDropdownVisible2 ? "active" : ""
                }`}
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <Link to="/insights">INSIGHTS</Link>
                </li>
                <li>
                  <Link to="/events">EVENTS</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/careers" className="nav-link">
                CAREERS
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
