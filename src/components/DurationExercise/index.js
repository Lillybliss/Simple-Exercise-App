import React, { Component } from "react";

/*Articles referenced: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
https://developer.mozilla.org/en-US/docs/Web/API/setInterval */

class DurationExercise extends Component {
  //back to home page
  goHome = () => {
    this.props.onGoHome();
  };

  state = {
    timer: 0, // initialize timer to 0
  };

  // methods for starting, resetting, and stopping the timer
  startTimer = () => {
    const interval = 1000; //1000ms = 1 sec
    this.timerID = setInterval(() => {
      const currentTime = this.state.timer;
      const newTime = currentTime + 1;
      this.setState({ timer: newTime });
    }, interval);
  }; //this sets the seconds to increase by 1 every 1000ms

  stopTimer = () => {
    clearInterval(this.timerID);
    this.timerID = undefined;
  }; //makes sure the same interval isnt cleared twice so the function can be called again without error

  resetTimer = () => {
    this.setState({ timer: 0 });
    clearInterval(this.timerID);
    this.timerID = undefined;
  }; //puts timer back to 0 and clears the interval

  formatTime = (time) => {
    // Helper function to format time with padding
    let minutes = Math.floor(time / 60); //Gives the whole # of minutes 
    let seconds = time % 60; // # of seconds left over
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }; //returns string in mm:ss format and padStart adds leading zeros

  render() {
    return (
      <div>
        <h1>{this.props.exercise}</h1>

        <p>Time: {this.formatTime(this.state.timer)}</p>

        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
        <button onClick={this.goHome}>Return</button>
      </div>
    );
  }
}

export default DurationExercise;
