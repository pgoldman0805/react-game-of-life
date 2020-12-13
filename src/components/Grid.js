export const Grid = ({grid, handleCellClick}) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${grid[0].length}, 20px)`,
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
    )
}

export default Grid;