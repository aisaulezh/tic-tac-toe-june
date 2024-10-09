import React from 'react';

const style = {
    border: '1px solid white',
    borderRadius: '10px',
    backgroundImage: 'url("/wood1.jpg")',
    backgroundSize: 'cover',
    fontSize: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontWeight: 'bolder',
    fontFamily: 'Comic Sans MS',
    cursor: 'pointer',
    height: '120px',
    width: '120px',
    margin: '5px',
    transition: 'background-color 0.3s ease',
    color: 'white',
    pointerEvents: 'auto'
};

const Square = ({ square, fillSquare, index }) => {
    const squareStyle = {
        ...style,
        color: square === 'X' ? '#1E90FF' : square === 'O' ? '#e0ff47' : 'white',
        pointerEvents: square ? 'none' : 'auto',
    };

    return (
        <button
            className="square"
            disabled={square}
            onClick={() => fillSquare(index)}
            style={squareStyle}
        >
            {square}
        </button>
    );
};

export default Square;
