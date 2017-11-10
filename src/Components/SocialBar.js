import React, { Component } from "react";
import '../styles/SocialBar.css';

export default class SocialBar extends Component {
  render() {
    return <div id='social-container' className='col-md-6'>
        <a className="social-icon" href="https://facebook.com">
          <i className="devicon-facebook-plain colored" />
        </a>
        <a className="social-icon" href="https://github.com">
          <i className="devicon-github-plain colored" />
        </a>
        <a className='social-icon' href='https://linkedin.com'><i className="fa fa-linkedin" aria-hidden="true" /></a>
      </div>;
  }
}
