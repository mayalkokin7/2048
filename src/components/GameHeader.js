import React, { useContext } from 'react';
import { Button } from 'antd';
import { BoardContext } from './BoardStore';
import './GameHeader.css';

const GameHeader = () => { 
    const { startNewGame } = useContext(BoardContext);
    
    return (
        <div className="header">
            <div className="title"> 2048 </div>
            <Button className="new-game-button" onClick={startNewGame}>New Game</Button>
        </div>
    ); 
};

export default GameHeader;
