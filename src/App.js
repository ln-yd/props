import React from "react";
import "./App.css";
import Display from "./components/display";
import PersonCard from "./components/PersonCard";
function App() {
  return (
    <div className="App">
      <Display someText={"HEHEHEHEH"} />

      <PersonCard
        firstName="Leslie"
        lastName="Duong"
        Age="27"
        HairColor="A mess"
      ></PersonCard>

      <PersonCard
        firstName="Laura"
        lastName="Duong"
        Age="27"
        HairColor="Its a mix of everything I like"
      ></PersonCard>

      <PersonCard
        firstName="Eric"
        lastName="Nguyen"
        Age="27"
        HairColor="Black"
      ></PersonCard>
      <PersonCard
        firstName="Leo"
        lastName="Duong"
        Age="10"
        HairColor="Black"
      ></PersonCard>
    </div>
  );
}

export default App;
