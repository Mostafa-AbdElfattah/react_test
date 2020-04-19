import React from "react";

export class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>My Email Is : {this.props.email}</h3>
        <h3> My phone Is : {this.props.phone} </h3>
        <h3>
          My Facebook Acount :{this.props.faceBook}
        </h3>
      </div>
    );
  }
}
