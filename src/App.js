import React from "react";
import "./App.css";
import { PersonDetails } from "./Components/PersonDetails/PersonDetails.component";
import { ContactInfo } from "./Components/ContactInfo/ContactInfo.component";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="first-div">
          <PersonDetails
            name="Mostafa Abd El-fattah"
            age="27"
            about="i like programing and making wep apps and mobile apps ,also
            i love learning new technologies related to this field ."
          />
        </div>
        <div className="second-div">
          <ContactInfo
            email="Mail@gmail.com"
            phone="01000000000"
            faceBook="fb.com/account"
          />
        </div>
      </div>
    );
  }
}
