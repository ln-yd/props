import React, { Component } from "react";

class PersonCard extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.lastName},{this.props.firstName}
        </h1>
        <div>Age:{this.props.Age}</div>

        <div>Hair Color: {this.props.HairColor}</div>
      </div>
    );
  }
}
export default PersonCard;
