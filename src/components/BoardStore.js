import React, { useState } from 'react';
import {
    addRandomCell,
    mergeValuesToLeft,
    mergeValuesToRight,
    rotateLeft,
    rotateRight,
    shiftLeft,
    shiftRight
} from './utils';
import { initialData } from './consts';

export const BoardContext = React.createContext({});

export const BoardStore = ({ children }) => {
    const [board, setBoard] = useState(initialData);
    const [gameOver, setGameOver] = useState(false);
    
    const startNewGame = () => {
        setBoard((board) => initialData);
        setGameOver(false);
    };
    
    const addCell = (newBoard) => {
        const updated = addRandomCell(newBoard);
        if (!updated) {
            setGameOver(true);
        }
        return updated;
    };

    const moveRight = () => {
        setBoard((board) => {
            let newBoard = shiftRight(board);
            newBoard = mergeValuesToRight(newBoard);
            newBoard = addCell(newBoard);
            return newBoard;
        });
    };

    const moveLeft = () => {
        setBoard((board) => {
            let newBoard = shiftLeft(board);
            newBoard = mergeValuesToLeft(newBoard);
            newBoard = addCell(newBoard);
            return newBoard;
        });
    };

    const moveDown = () => {
        setBoard((board) => {
            let newBoard = rotateRight(board);
            newBoard = shiftLeft(newBoard);
            newBoard = mergeValuesToLeft(newBoard);
            newBoard = rotateLeft(newBoard);
            newBoard = addCell(newBoard);
            return newBoard;
        });
    };

    const moveUp = () => {
        setBoard((board) => {
            let newBoard = rotateRight(board);
            newBoard = shiftRight(newBoard);
            newBoard = mergeValuesToRight(newBoard);
            newBoard = rotateLeft(newBoard);
            newBoard = addCell(newBoard);
            return newBoard;
        });
    };

    return (
        <BoardContext.Provider value={{
            board,
            setBoard,
            moveRight,
            moveLeft,
            moveDown,
            moveUp,
            startNewGame,
            gameOver
        }}>
            {children}
        </BoardContext.Provider>
    );
};

