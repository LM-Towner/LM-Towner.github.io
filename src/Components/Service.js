import React, { Component } from "react";

export default class Service extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 container components">
        <div className="col-xs-3 col-sm-3 col-md-3 service">
        <p>Website Design</p>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 service">
          <p>Tech Consulting</p>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 service">
          <p>Being Great</p>
        </div>
      </div>
    );
  }
}
