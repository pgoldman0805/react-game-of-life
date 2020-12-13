import {useState} from 'react';
import produce from 'immer';

export const useGrid = (passedCoefficient) => {
    const numRows = 30;
    const numCols = 30;
    

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
        rows.push(Array.from(Array(numCols), () => Math.random() > passedCoefficient ? 1 : 0));
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

    return {
        numRows,
        numCols,
        operations,
        initialGrid,
        randomGrid,
        grid,
        setGrid,
        handleCellClick
    };
}

export default useGrid;