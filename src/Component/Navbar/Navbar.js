


import React, { Component } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import NavLogo from './NavLogo.png'



// Add this import statement


export class Navbar extends Component {
  // Add this constructor
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      nightMode: false // Night mode state
    };


  }


  handleCountryChange = async (e) => {
    const selectedCountry = e.target.value;
    this.props.onCountryChange(selectedCountry); // Call the prop function to update the selected country in App.js
    this.props.history.push(`/${selectedCountry}`); // Navigate to the corresponding route based on the selected country
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }






  // Function to toggle night mode
  toggleNightMode = () => {
    this.setState(prevState => ({
      nightMode: !prevState.nightMode
    }));
  };


  render() {
    const { nightMode, toggleNightMode, selectedCountry, onCountryChange } = this.props;

    return (
      <nav className={`navbar navbar-expand-lg navbar-light bg-${nightMode ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${nightMode ? 'light' : 'dark'}`} to="/">
          <img src={NavLogo} alt="Logo" height={40} width={40}/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link className={`nav-link text-${nightMode ? 'light' : 'dark'}`} to="/">Home</Link> </li>
              <li className="nav-item"> <Link className={`nav-link text-${nightMode ? 'light' : 'dark'}`} to="/business">Business</Link></li>
              <li className="nav-item"> <Link className={`nav-link text-${nightMode ? 'light' : 'dark'}`} to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"> <Link className={`nav-link text-${nightMode ? 'light' : 'dark'}`} to="/general">General</Link></li>
              <li className="nav-item"> <Link className={`nav-link text-${nightMode ? 'light' : 'dark'}`} to="/health">Health</Link></li>
              <li className="nav-item"> <Link className={`nav-link text-${nightMode ? 'light' : 'dark'}`} to="/science">Science</Link></li>
              <li className="nav-item"> <Link className={`nav-link text-${nightMode ? 'light' : 'dark'}`} to="/sports">Sports</Link></li>
              <li className="nav-item"> <Link className={`nav-link text-${nightMode ? 'light' : 'dark'}`} to="/technology">Technology</Link></li>
            </ul>

            <div className='Dropdown dropdown' style={{ maxHeight: '150px', overflowY: 'auto' }}>
              <select className="nav-item dropdown form-select" value={selectedCountry} onChange={onCountryChange} style={{ maxHeight: '150px', overflowY: 'auto' }}>
                <option value="in">India</option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="all">All Countries</option>
                <option value="cu">Cuba</option>
                <option value="it">Italy</option>
                <option value="pl">Poland</option>
                <option value="ua">Ukraine</option>
                <option value="cz">Czech Republic</option>
                <option value="pt">Portugal</option>
                <option value="us">United States</option>
                <option value="ae">United Arab Emirates</option>
                <option value="de">Germany</option>
                <option value="kr">South Korea</option>
                <option value="ro">Romania</option>
                <option value="ve">Venezuela</option>
                <option value="ar">Argentina</option>
                <option value="it">Italy</option>
                <option value="rs">Serbia</option>
                <option value="za">South Africa</option>
                <option value="at">Austria</option>
                <option value="au">Australia</option>
                <option value="be">Belgium</option>
                <option value="bg">Bulgaria</option>
                <option value="br">Brazil</option>
                <option value="gb">United Kingdom</option>
                <option value="gr">Greece</option>
                <option value="hk">Hong Kong</option>
                <option value="hu">Hungary</option>
                <option value="lv">Latvia</option>
                <option value="ma">Morocco</option>
                <option value="mx">Mexico</option>
                <option value="my">Malaysia</option>
                <option value="ng">Nigeria</option>
                <option value="se">Sweden</option>
                <option value="sg">Singapore</option>
                <option value="si">Slovenia</option>
                <option value="ru">Russia</option>
                <option value="sa">Saudi Arabia</option>
                <option value="ca">Canada</option>
                <option value="id">Indonesia</option>
                <option value="sk">Slovakia</option>
                <option value="ch">Switzerland</option>
                <option value="no">Norway</option>
                <option value="th">Thailand</option>
                <option value="cn">China</option>
                <option value="il">Israel</option>
                <option value="tr">Turkey</option>
                <option value="co">Colombia</option>
                <option value="in">India</option>
                <option value="ph">Philippines</option>
                {/* Add more options for other countries */}
              </select>
            </div>


            {/* Night mode switch */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="nightModeSwitch" checked={nightMode} onChange={toggleNightMode} />
              <label className={`form-check-label text-${nightMode ? 'light' : 'dark'}`} htmlFor="nightModeSwitch">Night Mode</label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;