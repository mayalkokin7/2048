import _ from 'lodash';

export const shiftRight = (board) => board.map((row) => {
    const newRow = [];
    row.forEach((cell) => {
        if (cell === 0) newRow.unshift(cell);
        else newRow.push(cell);
    });
    return newRow;
});

export const shiftLeft = (board) => board.map((row) => {
    const newRow = [];
    row.forEach((cell, i) => {
        const len = row.length;
        if (row[len - 1 - i] === 0) newRow.push(row[len - 1 - i]);
        else newRow.unshift(row[len - 1 - i]);
    });
    return newRow;
});

export const mergeValuesToLeft = (board) => (
    board.map((row) => {
        const newRow = [...row];
        for (let i = 0; i < row.length - 1; i++) {
            if (newRow[i] !== 0 && newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2;
                newRow[i + 1] = 0;
            } else if (newRow[i] === 0 && newRow[i + 1] !== 0) {
                newRow[i] = newRow[i + 1];
                newRow[i + 1] = 0;
            }
        }
        return newRow;
    }));

export const mergeValuesToRight = (board) => (
    board.map((row) => {
        const newRow = _.cloneDeep(row);
        for (let i = row.length - 1; i > 0; i--) {
            if (newRow[i] !== 0 && newRow[i] === newRow[i - 1]) {
                newRow[i] *= 2;
                newRow[i - 1] = 0;
            } else if (newRow[i] === 0 && newRow[i - 1] !== 0) {
                newRow[i] = newRow[i - 1];
                newRow[i - 1] = 0;
            }
        }
        return newRow;
    }));

export const rotateRight = (board) => {
    const newBoard = [];
    for (let col = 0; col < board.length; col++) {
        const newRow = [];
        for (let row = board.length - 1; row >= 0; row--) {
            newRow.push(board[row][col]);
        }
        newBoard.push(newRow);
    }
    return newBoard;
};

export const rotateLeft = (board) => {
    const newBoard = [];
    for (let col = board.length - 1; col >= 0; col--) {
        const newRow = [];
        for (let row = board.length - 1; row >= 0; row--) {
            newRow.unshift(board[row][col]);
        }
        newBoard.push(newRow);
    }

    return newBoard;
};

export const getRandomFromArr = (arr) => (arr[Math.floor(Math.random() * arr.length)]);

export const getEmptyCells = (boardCopy) => {
    const emptyCells = [];
    boardCopy.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (boardCopy[i][j] === 0) {
                emptyCells.push([i, j]);
            }
        });
    });
    return emptyCells;
};
export const addRandomCell = (boardCopy) => {
    const emptyCells = getEmptyCells(boardCopy);
    if (_.isEmpty(emptyCells)) {
        return false;
    }
    const RandomCell = getRandomFromArr(emptyCells);
    const randomCellValue = getRandomFromArr([2, 4]);
    const newBoard = _.cloneDeep(boardCopy);
    newBoard[RandomCell[0]][RandomCell[1]] = randomCellValue;
    return newBoard;
};
