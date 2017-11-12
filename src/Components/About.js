import React, { Component } from "react";
import "../styles/About.css";
export default class About extends Component {
  render() {
    return <div className="col-xs-5 col-sm-5 col-md-5 components">
        <h1 className="about-title">About Me</h1>
        <p>
          <i class="fa fa-user" aria-hidden="true" />
          <span className="text">Bone Digger</span>
        </p>

        <p>
          <i class="fa fa-map-marker" aria-hidden="true" />
          <span className="text">Greater Doggy Area</span>
        </p>

        <p>
          <i class="fa fa-envelope" aria-hidden="true" />
          <span className="text">PuppyChow@gmail.com</span>
        </p>
        <p>
          <i class="fa fa-phone" aria-hidden="true" />
          <span className="text">555-234-2332</span>
        </p>
      </div>;
  }
}
