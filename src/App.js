import './App.css';
import 'antd/dist/antd.css';
import React, { useContext } from 'react';
import Board from './components/Board';
import { BoardContext, BoardStore } from './components/BoardStore';
import GameHeader from './components/GameHeader';

const App = () => (
    <div className="app">
        <div>
            <BoardStore>
                <>
                    <GameHeader />
                    <Board />
                </>
            </BoardStore>
        </div>
    </div>
);
export default App;
