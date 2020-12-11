import React, {useState, useCallback, useRef} from 'react';
import produce from 'immer';

const numRows = 30;
const numCols = 30;
const simulationSpeed = 50;
const randCoefficient = 0.8;

// used to find all neighbors
const operations = [
  [0,1],
  [0,-1],
  [1,-1],
  [-1,1],
  [1,1],
  [-1,-1],
  [1,0],
  [-1,0]
];

const App = () => {

  const initialGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  }

  const randomGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => Math.random() > randCoefficient ? 1 : 0));
    }
    return rows;
  }

  
  const [grid, setGrid] = useState(initialGrid);
  const handleCellClick = (i, k) => {
    const newGrid = produce(grid, gridCopy => {
      gridCopy[i][k] = grid[i][k] ? 0 : 1;
    });
    setGrid(newGrid);
  }

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

    setTimeout(runSimulation, simulationSpeed);
  }, []);

  return <div>
    <button onClick={() => {
      setRunning(!running);
      if (!running){
        runningRef.current = true;
        runSimulation();
      }
      
    }}>
      {running ? "stop" : "start"}
    </button>
    <button onClick={() => setGrid(initialGrid)}>
      clear
    </button>
    <button onClick={() => setGrid(randomGrid)}>
      random
    </button>
    <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`,
    }}>
      {grid.map((rows, i) => 
        rows.map((col, k) => (
          <div 
            onClick={() => handleCellClick(i,k)}
            key={`${i}-${k}`} 
            style={{
                width: 20, 
                height: 20, 
                border: '1px solid #333', 
                margin: '0 10px',
                backgroundColor: grid[i][k] ? '#293D0E' : undefined,
              boxShadow: '0 1px blue',
            borderRadius: '4px'}}
            >

          </div>
      )))}
    </div>
  </div>;
}

export default App;