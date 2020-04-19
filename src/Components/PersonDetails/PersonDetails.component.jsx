import React from "react";

export class PersonDetails extends React.Component {
  render() {
    return (
      <div>
        <h3>My Name Is : {this.props.name}</h3>
        <h3> My Age Is : {this.props.age} years old </h3>
        <h3> About Me : {this.props.about} </h3>
      </div>
    );
  }
}
