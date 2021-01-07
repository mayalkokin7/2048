import React from 'react';
import randomColor from 'randomcolor';
import './cell.css';

const colors = {
    0: '#776e65',
    2: '#eee4da',
    4: '#eee1c9',
    8: '#f3b27a',
    16: '#f69664',
    32: '#f77c5f',
    64: '#f75f3b'
};

const Cell = ({ value }) => (
    <td>
        <div
            style={{ backgroundColor: colors[value] ? colors[value] : randomColor() }}
            className="cell"
        >
            {value}
        </div>
    </td>
);

export default Cell;
