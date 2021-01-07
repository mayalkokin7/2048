import React, { useContext, useEffect } from 'react';
import Row from './Row';
import './board.css';
import { BoardContext } from './BoardStore';
import { Button } from 'antd';
import Mousetrap from 'mousetrap';

const Board = () => {
    const { board, moveRight, moveLeft, moveDown, moveUp, gameOver } = useContext(BoardContext);

    useEffect(() => {
        Mousetrap.bind('up', moveUp);
        Mousetrap.bind('down', moveDown);
        Mousetrap.bind('left', moveLeft);
        Mousetrap.bind('right', moveRight);
        return () => {
            Mousetrap.unbind('up');
            Mousetrap.unbind('down');
            Mousetrap.unbind('left');
            Mousetrap.unbind('right');
        };
    }, []);

    return (
        <div>
            <table className="board">
                <tbody>
                    {!gameOver
                        ? board.map((row, index) => <Row data={row} key={index} />)
                        : <div className="game-over"> Game Over </div>}
                </tbody>
            </table>
            <div>
                <Button onClick={moveRight}>right</Button>
                <Button onClick={moveDown}>down</Button>
                <Button onClick={moveUp}>up</Button>
                <Button onClick={moveLeft}>left</Button>

            </div>
        </div>
    );
};

export default Board;
