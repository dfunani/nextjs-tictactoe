import React, { useEffect, useState } from 'react';
import Tile from './Tile';
import Button from './Button';
import Start from './Start';

type props = {
  isDark: boolean
}

enum GameState {
  start="Start",
  playing="Playing",
  gameover="Game-Over"
}

const Game = ({isDark}: props) => {
  const [tiles, setTiles] = useState<string[]>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [mode, setMode] = useState<GameState>(GameState.start);
  const [p1, setP1] = useState<string>("Player X")
  const [p2, setP2] = useState<string>("Player O")
  const [status, setStatus] = useState<string>("")

  const calculateWinner = () => {
    const winningLines: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of winningLines) {
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (mode !== GameState.playing || tiles[index]) {
      return;
    }

    const newTiles = tiles.slice();
    newTiles[index] = isXNext ? 'X' : 'O';
    setTiles(newTiles);
    setIsXNext(!isXNext);

    const winner = calculateWinner();
    if (winner) {
      setMode(GameState.gameover);
    }
  };

  const startGame = () => {
    setTiles(Array(9).fill(""));
    setIsXNext(true);
    setMode(GameState.playing);
  };

  const restartGame = () => {
    startGame()
  };

 useEffect(() => {
  if (mode === GameState.start) {
    setStatus('Click the button below to start!');
  } else if (mode === GameState.gameover) {
    const winner = calculateWinner();
    setStatus(winner ? `${winner === "X" ? p1 : p2} wins!` : "It's a draw!");
    if (winner) {
      setMode(GameState.gameover);
    }
  } else {
    setStatus(`${isXNext ? p1 : p2}'s turn`);
  }
 }, [tiles, isXNext])

  return (
    <div className="game">
      {mode === GameState.gameover ? (<div className='restart-button'><Button value={status} onClick={startGame} /></div>) : <div className='restart-button'><Button value={status} onClick={() => null}/></div>}
      {(mode !== GameState.start) && <div className="game-board">
        {tiles.map((tile, index) => (
          <Tile isDark={isDark} key={index} value={tile} onClick={() => handleClick(index)} />
        ))}
      </div>}
      {mode === GameState.start && (<div className='start-button'><Start isDark={isDark} value={"Start Game"} onClick={startGame} setP1={setP1} setP2={setP2} /></div>)}
    </div>
  );
};

export default Game;
