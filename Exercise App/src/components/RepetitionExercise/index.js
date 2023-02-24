import React, { Component } from "react";

class RepetitionExercise extends Component {
  state = {
    count: 0, //initialize count to 0
  };
  // add methods to class for increasing/resetting/going home:
  addRep = () => {
    this.setState({ count: this.state.count + 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  //this calls the onGoHome function from App.js. That function handles the states of selected exercises back to nothing using the original handleSelectExercise function
  goHome = () => {
    this.props.onGoHome();
  };

  //whats rendered to the page:
  render() {
    return (
      <div>
        <h1>{this.props.exercise}</h1>

        <p>Reps: {this.state.count}</p>
        <button onClick={this.addRep}>Increase Count</button>
        <button onClick={this.resetCount}>Reset</button>
        <button onClick={this.goHome}>Return</button>
      </div>
    );
  }
}

export default RepetitionExercise;
