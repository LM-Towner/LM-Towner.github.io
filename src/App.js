import React, { Component } from 'react';
import "./styles/App.css";
import MainSideBar from './Components/MainSideBar';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Service from './Components/Service';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      <div className='row container'>
        <MainSideBar/>
        <Service/>
      </div>
      </div>
    );
  }
}

export default App;
