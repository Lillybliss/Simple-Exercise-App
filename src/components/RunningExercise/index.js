//option 2: create a new component, RunningExercise, that includes a new button to record laps that saves the current time to a list of times.
// Laps should be shown at the bottom of the component and should be displayed using map using an array of lap times stored as an array. Laps can be stored on the component and do not need to be stored on the parent component. */

import React, { useState, useEffect} from "react";

function RunningExercise() {
    const [start, setStart] = useState(null);
    const [lap, setLap] = useState([]);
    const [elapsedTime, setElapsedTime] = useState(0);

    //timer to display elapsed time to the user:
    useEffect(() => {
      let timerID;
      if (start) {
        timerID = setInterval(() => {
          const elapsed = new Date() - start;
          setElapsedTime(elapsed);
        }, 10);
      }
      return () => clearInterval(timerID);
    }, [start]);


    //handleStart sets the start time
    const handleStart = () => {
       setStart(new Date());
    };

    //handleStop calculates elapsed time & adds it to the array, then sets the start time back to null:
    const handleStop = () => {
      if (start) {
        const elapsedTime = new Date() - start;
        setLap(lap.concat(elapsedTime))
        setStart(null);
      }
    };

    //reset timer:
    const handleReset = () => {
      setElapsedTime(0);
      setLap([]);
    };


    //format timer:
    const timer = (time) => { //format timer to mm:ss:ms
        const ms = `000${time % 1000}`.slice(-3);
        const secs = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
        const mins = `0${Math.floor((time / (1000 * 60)) % 60)}`.slice(-2);
        
        return `${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
    }

    

    return (
      //use conditions to render the stop button when start is active. USe map to render the lap times array. Each lap gets its own div
      <div>
        <h2>Running Exercise</h2>
        <h3>{timer(elapsedTime)}</h3>
        {
          start ? ( // if start is true, render stop, otherwise render start.
            <button onClick={handleStop}>Stop</button>
          ) : (
            <button onClick={handleStart}>Start</button>
          ) 
        }
        {lap.length > 0 && (
          <div>
            <button onClick={handleReset}>Reset</button>
            <div>
              {lap.map((lap, index) => (
                <div key={index}>
                  Lap {index + 1}: {timer(lap)} 
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
  );
}


export default RunningExercise