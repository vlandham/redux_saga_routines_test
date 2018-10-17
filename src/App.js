import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { fetchDataRoutine } from "./reducers/data";

const mapStateToProps = state => ({
  data: state.data.data
});

const mapDispatchToProps = {
  fetchDataRoutine
};

class App extends Component {
  componentDidMount() {
    this.props.fetchDataRoutine();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Data:</p>
          <ul>
            {data.map(d => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
