import React, { Component } from 'react';
import SocialBar from './SocialBar';
import '../styles/MainSideBar.css';

export default class MainSideBar extends Component {
  render(){
    return <div className=" col-xs-3 col-sm-3 col-md-3 components" >
        <img className='profile-img' src="http://bit.ly/2rqw4Dn" alt="profile" />
        <h1 className="col-md-3 title">Master of Bones</h1>
        <p id="bio" className='container'>
          Lorem ipsum dolor sit amet, ut vix viderer rationibus, eu quo
          lobortis repudiare.
        </p>

        {/* Social Bar stuff */}
        <SocialBar/>
      </div>;
  }
}