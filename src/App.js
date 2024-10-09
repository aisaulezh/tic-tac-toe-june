import './App.css';
import { useEffect, useState } from "react";
import Square from "./components/Square";

const boardStyle = {
    width: '400px',
    height: '400px',
    margin: 'auto',
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
};

function App() {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const fillSquare = (index) => {
        if (board[index] || winner) {
            return;
        }
        const nextPlayer = xIsNext ? 'X' : 'O';
        setBoard(board.map((el, i) => i === index ? nextPlayer : el));
        setXIsNext(!xIsNext);
    };

    const checkWinner = () => {
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];
            if (board[a] === board[b] && board[b] === board[c] && board[b] !== null) {
                setWinner(board[a]);
            }
        }
    };

    useEffect(() => {
        checkWinner();
    }, [board]);

    const restartGame = () => {
        setBoard(new Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
    };

    const checkDraw = () => {
        if (!board.includes(null) && !winner) {
            return 'DRAW🤨';
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ fontFamily: 'Comic Sans MS', fontSize: '48px', color: 'white', fontWeight: '10px' }}>
                    TIC-TAC-TOE
                </h1>

                <div style={boardStyle}>
                    {board.map((el, index) =>
                        <Square
                            key={index}
                            index={index}
                            square={el}
                            fillSquare={fillSquare}
                        />
                    )}
                </div>

                {winner ? (
                    <h2 style={{ fontSize: '40px', color: 'white', fontFamily: 'Comic Sans MS', marginTop: '20px', marginBottom: '20px' }}>
                        Congrats👏 The winner is {winner}😍
                    </h2>
                ) : (
                    <h2 style={{ fontSize: '40px', color: 'white', fontFamily: 'Comic Sans MS', marginTop: '20px', marginBottom: '20px' }}>
                        {board.includes(null) ? `Next player: ${xIsNext ? '❌' : '⭕'}` : 'Draw 🤨'}
                    </h2>
                )}

                <button
                    onClick={restartGame}
                    style={{
                        padding: '10px 20px',
                        fontSize: '18px',
                        fontWeight: '20px',
                        fontFamily: 'Comic Sans MS',
                        borderRadius: '15px',
                        borderColor: 'beige',
                        borderWidth: '5px',
                        cursor: 'pointer',
                        color: 'white',
                        backgroundImage: 'url("/wood1.jpg")',
                        backgroundSize: 'cover',
                        marginTop: '20px',
                    }}
                >
                    RESTART
                </button>
            </header>
        </div>
    );
}

export default App;
