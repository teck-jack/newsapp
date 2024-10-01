import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Add this import statement


export class Navbar extends Component {
    // Add this constructor
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Nation</Link>
                        <button onClick={this.toggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${this.state.isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"> <Link className="nav-link" to="/">Home</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/business">business</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/entertainment">entertainment</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/general">general</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/health">health</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/science">science</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/sports">sports</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/technology">technology</Link></li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.isOpen ? "true" : "false"}>
                                        Dropdown
                                    </Link>
                                    <div className={`dropdown-menu ${this.state.isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        )

    }

}


export default Navbar