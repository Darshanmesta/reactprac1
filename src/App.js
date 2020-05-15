import React from "react";
import "./styles.css";
import First from "./components/First";
import Second from "./components/Second";

export default class App extends React.Component {
  state = {
    datas: [
      { name: "Darshan", email: "darshan@gmail.com" },
      { name: "Suraj", email: "suraj@gmail.com" }
    ]
  };

  dispVal = val => {
    console.log(val);
    let datas = [...this.state.datas, val];

    this.setState({ datas });
  };

  render() {
    return (
      <div>
        <First datas={this.state.datas} />
        <Second dispVal={this.dispVal} />
      </div>
    );
  }
}
