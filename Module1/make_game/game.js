let columns = 12;
let rows = 20;
let sizeSquare = 30;
let colorArray = ['blue', 'red', 'purple', 'yellow', 'green', 'cyan', 'gray', 'white'];
let boardArray = [];
for (let i = 0; i < rows; i++) {
    boardArray[i] = [];
    for (let j = 0; j < columns; j++) {
        boardArray[i][j] = '7';
    }
}
let canvas = document.getElementById("board");
let ctx = canvas.getContext('2d');
ctx.canvas.width = columns * sizeSquare;
ctx.canvas.height = rows * sizeSquare;

class Board {
    constructor(ctx) {
        this.ctx = ctx;
        this.board = boardArray;
    }

    drawCell(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * sizeSquare, y * sizeSquare, sizeSquare, sizeSquare);
        this.ctx.strokeRect(x * sizeSquare, y * sizeSquare, sizeSquare, sizeSquare)
    }

    drawBoard() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                this.drawCell(j, i, colorArray[this.board[i][j]])
            }
        }
    }
}

let shapeBrickArray = [     /*hình dạng của khối gạch các  là id của mã màu là element*/
    [[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
    [[[1, 7], [1, 7], [1, 1]], [[1, 1, 1], [1, 7, 7]], [[1, 1], [7, 1], [7, 1]], [[7, 7, 1], [1, 1, 1]]],
    [[[7, 2], [7, 2], [2, 2]], [[2, 7, 7], [2, 2, 2]], [[2, 2], [2, 7], [2, 7]], [[2, 2, 2], [7, 7, 2]]],
    [[[3, 3, 3], [7, 3, 7], [7, 3, 7]], [[7, 7, 3], [3, 3, 3], [7, 7, 3]], [[7, 3, 7], [7, 3, 7], [3, 3, 3]], [[3, 7, 7], [3, 3, 3], [3, 7, 7]]],
    [[[4, 4, 7], [7, 4, 4]], [[7, 4], [4, 4], [4, 7]], [[4, 4, 7], [7, 4, 4]], [[7, 4], [4, 4], [4, 7]]],
    [[[5], [5], [5], [5]], [[5, 5, 5, 5]], [[5], [5], [5], [5]], [[5, 5, 5, 5]]],
    [[[7, 6, 6], [6, 6, 7]], [[6, 7], [6, 6], [7, 6]], [[7, 6, 6], [6, 6, 7]], [[6, 7], [6, 6], [7, 6]]]
];

class Brick {
    constructor(idShape, idDirector) {
        this.idShape = idShape;
        this.shape = shapeBrickArray[this.idShape];
        this.idDirector = idDirector;
        this.xPosition = 5;
        this.yPosition = 0;
    }

    drawBrick() {
        for (let i = 0; i < this.shape[this.idDirector].length; i++) {
            for (let j = 0; j < this.shape[this.idDirector][i].length; j++) {
                if (this.shape[this.idDirector][i][j] !== 7) {
                    board.drawCell(j + this.xPosition, i + this.yPosition, colorArray[this.idShape]);
                }
            }
        }
    }

    unDrawBrick() {
        for (let i = 0; i < this.shape[this.idDirector].length; i++) {
            for (let j = 0; j < this.shape[this.idDirector][i].length; j++) {
                if (this.shape[this.idDirector][i][j] !== 7) {
                    board.drawCell(j + this.xPosition, i + this.yPosition, 'white');
                }
            }
        }
    }

    moveLeft() {
            this.unDrawBrick();
            this.xPosition--;
            this.drawBrick();
    }

    moveRight() {
            this.unDrawBrick();
            this.xPosition++;
            this.drawBrick();
    }

    moveDown() {
            this.unDrawBrick();
            this.yPosition++;
            this.drawBrick();
    }

    turnBrick() {
            this.unDrawBrick();
            this.idDirector = (this.idDirector + 1) % 4;
            this.drawBrick();
    }

    checkContact(x, y, nextShape) {
        for (let i = 0; i < nextShape.length; i++) {
            for (let j = 0; j < nextShape[i].length; j++) {
                if (nextShape[i][j] !== 7) {
                    if (j + x >= columns || x < 0 || y + i >= rows) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

let board = new Board(ctx);
board.drawBoard()
let brick = new Brick(1, 1);
brick.drawBrick();
document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37 :
            brick.moveLeft();
            break;
        case 38:
            brick.turnBrick();
            break;
        case 39:
            brick.moveRight();
            break;
        case 40:
            brick.moveDown();
            break;

    }
})



