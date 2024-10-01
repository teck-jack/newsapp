
import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar/Navbar.js';
import News from './Component/News/News';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import AnimatedTextBelowNavbar from './Component/AnimatedTextBelowNavbar/AnimatedTextBelowNavbar.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setProgress = this.setProgress.bind(this);
    this.toggleNightMode = this.toggleNightMode.bind(this);
    this.state = {
      nightMode: false, // Night mode state
      progress: 0,
      selectedCountry: 'in' // Default country set to India
    };
  }

  apiKey = process.env.REACT_APP_NEWS_API;

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  toggleNightMode() {
    this.setState(prevState => ({
      nightMode: !prevState.nightMode
    }));
  }

  handleCountryChange = (e) => {
    this.setState({ selectedCountry: e.target.value });
  };

  render() {
    const { nightMode, selectedCountry } = this.state;

    return (
      <Router>
        <div className={`App ${nightMode ? 'night-mode' : ''}`}>
          <Navbar
            nightMode={nightMode}
            toggleNightMode={this.toggleNightMode}
            selectedCountry={selectedCountry}
            onCountryChange={this.handleCountryChange} // Pass handleCountryChange function
          />
          {/* <div>
            <AnimatedTextBelowNavbar text="daily news top head line " nightMode={nightMode} />
          </div> */}

          <LoadingBar height={3} color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route path='/' element={<Navigate to="/general" />} />
            <Route path='/general' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' pageSize={6} selectedCountry={selectedCountry} category='general' nightMode={nightMode} />} />
            <Route path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='business' pageSize={6} selectedCountry={selectedCountry} category='business' nightMode={nightMode} />} />
            <Route path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' pageSize={6} selectedCountry={selectedCountry} category='entertainment' nightMode={nightMode} />} />
            <Route path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='health' pageSize={6} selectedCountry={selectedCountry} category='health' nightMode={nightMode} />} />
            <Route path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='science' pageSize={6} selectedCountry={selectedCountry} category='science' nightMode={nightMode} />} />
            <Route path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pageSize={6} selectedCountry={selectedCountry} category='sports' nightMode={nightMode} />} />
            <Route path='/technology/*' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pageSize={6} selectedCountry={selectedCountry} category='technology' nightMode={nightMode} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
