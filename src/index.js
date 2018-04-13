import React from "react";
import $ from "jquery";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App extends React.Component {
  clickMe = str => {
    console.log($(str), "THIS IN TESTS ");
    $(str).addClass("red");
  };

  renderTitles = () => {
    const titles = ["one", "two", "three"];
    return titles.map(title => (
      <h2 key={title} onClick={() => this.clickMe(".test")} className="test">
        {title}
      </h2>
    ));
  };

  render() {
    return <div style={styles}>{this.renderTitles()}</div>;
  }
}
