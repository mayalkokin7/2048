import React from 'react';
import Cell from './Cell';

const Row = ({ data }) => (
    <tr>
        {data.map((num, index) => <Cell value={num} key={index} />)}
    </tr>
);

export default Row;
