import React, { Component } from 'react';
import "./styles/App.css";
import MainSideBar from './Components/MainSideBar';
import About from './Components/About';
import Links from './Components/Links';

class App extends Component {
  render() {
    return (
      <div className='row'>
        <MainSideBar/>
        <About/>
        <Links/>
      </div>
    );
  }
}

export default App;
