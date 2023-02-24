import React, { Component } from "react";
import DurationExercise from "./components/DurationExercise/index";
import RepetitionExercise from "./components/RepetitionExercise/index";
import RunningExercise from "./components/RunningExercise";

class ExerciseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExercise: "",
      exerciseType: "",
    };
  }

  //this handles the states based on the ex type
  handleSelectExercise = (exercise, type) => {
    this.setState({ selectedExercise: exercise, exerciseType: type });
  };


  render() {
    const { selectedExercise, exerciseType } = this.state;
    //using conditionals to render main menu without selected exercise, then renders the components based on type
    return (
      <div>
        {selectedExercise === "" ? (
          <div>
            <h1>Lilly's Exercise App!</h1>
            <h3>Repetition Exercises:</h3>
            <button
              onClick={() =>
                this.handleSelectExercise("Push Ups", "Repetition")
              }
            >
              Push Ups
            </button>
            <br></br>
            <button
              onClick={() =>
                this.handleSelectExercise("Jumping Jacks", "Repetition")
              }
            >
              Jumping Jacks
            </button>
            <h3>Duration Exercises:</h3>
            <button
              onClick={() => this.handleSelectExercise("Running", "Duration")}
            >
              Running
            </button>
            <br></br>
            <button
              onClick={() => this.handleSelectExercise("Plank", "Duration")}
            >
              Plank
            </button>
            <br></br>
            <button
              onClick={() => this.handleSelectExercise("Bicycling", "Duration")}
            >
              Bicycling
            </button>
          </div>
        ) :  selectedExercise === "Running" ? (
        // code to rendernew  RunningExercise component
        <RunningExercise onGoHome={() => this.handleSelectExercise("", "")} />
      )  :  (
          <div>
            {exerciseType === "Duration" ? (
              <DurationExercise
                exercise={selectedExercise}
                onGoHome={() => this.handleSelectExercise("", "")}
              />
            ) : (
              <RepetitionExercise
                exercise={selectedExercise}
                onGoHome={() => this.handleSelectExercise("", "")}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ExerciseApp;
