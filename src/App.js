import React, {useState, useCallback, useRef} from 'react';
import Grid from './components/Grid';
import useGrid from './hooks/useGrid';
import { produce } from 'immer';
import { useEffect } from 'react';


const initialSimulationSpeed = 50;
const initCoefficient = 0.5;

const App = () => {

  const [speed, setSpeed] = useState(initialSimulationSpeed);
  const [coefficient, setCoefficient] = useState(initCoefficient);

  const {
    numRows,
        numCols,
        operations,
        initialGrid,
        randomGrid,
        grid,
        setGrid,
        handleCellClick
  } = useGrid(coefficient);

  const [running, setRunning] = useState(false);
  const runningRef = useRef();
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current){
      return;
    }
    // simulate
    setGrid((currentGrid) => {
      return produce(currentGrid, gridCopy => {
        for (let i = 0; i < numRows; i++){
          for (let k = 0; k < numCols; k++){
            let neighbors = 0;
            operations.forEach(([x,y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols){
                neighbors += gridCopy[newI][newK];
              }
            })

            if (neighbors < 2 || neighbors > 3){
              gridCopy[i][k] = 0;
            } else if (currentGrid[i][k] === 0 && neighbors === 3){
              gridCopy[i][k] = 1;
            }
          }
        }
      })
    })

    setTimeout(runSimulation, speed);
  }, [speed, setSpeed]);

  const toggleStartStop = () => {
    setRunning(!running);
    if (!running){
      runningRef.current = true;
      runSimulation();
    }
  }
  useEffect(() => {
    runSimulation();
  }, [speed, coefficient, runSimulation]);
  const handleUpdateCoeffecient = (e) => {
      setCoefficient(Number.parseFloat(e.currentTarget.value));  
  }
  const handleUpdateSpeed = (e) => {
    console.log(`oldSpeed: ${speed}`);
    setSpeed(Number.parseInt(e.currentTarget.value));
    console.log(`newSpeed: ${speed}`);
  }

  return (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <aside style={{margin: 20}}>
      <button onClick={toggleStartStop}>{running ? "stop" : "start"}</button>
      <button onClick={() => setGrid(initialGrid)}>clear</button>
      <button onClick={() => setGrid(randomGrid)}>random</button>
      <label>Set coefficient</label>
      <input type='range' name="coefficient" min="0" max="1" step="0.1" onChange={(e) => handleUpdateCoeffecient(e)} value={coefficient}/>
      <label>Set Speed</label>
      <input type='range' name="speed" min="50" max="3000" step="10" onChange={(e) => handleUpdateSpeed(e)} value={speed}/>
    </aside>

    <Grid 
      grid={grid}
      handleCellClick={handleCellClick}
      />
  </div>
  );
}

export default App;