import React, { Component } from 'react';
import '../styles/MainSideBar.css';

export default class MainSideBar extends Component {
  render(){
    return <div className="col-md-3 components" >
        <img className='profile-img' src="http://bit.ly/2rqw4Dn" alt="profile" />
        <h1 className="title">Master of Bones</h1>
        <p id="bio" className='container'>
          Lorem ipsum dolor sit amet, ut vix viderer rationibus, eu quo
          lobortis repudiare.
        </p>
      </div>;
  }
}