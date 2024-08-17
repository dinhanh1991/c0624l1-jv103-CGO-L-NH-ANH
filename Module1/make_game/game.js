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
        this.table = boardArray;
    }

    drawCell(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * sizeSquare, y * sizeSquare, sizeSquare, sizeSquare);
        this.ctx.strokeRect(x * sizeSquare, y * sizeSquare, sizeSquare, sizeSquare)
    }

    drawBoard() {
        for (let i = 0; i < this.table.length; i++) {
            for (let j = 0; j < this.table[i].length; j++) {
                this.drawCell(j, i, colorArray[this.table[i][j]])
            }
        }
    }
}

let shapeBrickArray = [     /*hình dạng của khối gạch các  là id của mã màu là element*/
    [[[1, 0], [0, 0]],[[0, 0], [0, 0]],[[0, 0], [0, 0]],[[0, 0], [0, 0]]],//vuông
    [[[1, 7], [1, 7], [1, 1]],[[1, 1, 1], [1, 7, 7]],[[1, 1], [7, 1], [7, 1]],[[7, 7, 1], [1, 1, 1]]],//L
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
                    board.drawCell(j + this.xPosition, i + this.yPosition,colorArray[this.shape[this.idDirector][i][j]]);
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
        if(!this.checkContact(this.xPosition-1, this.yPosition,this.shape[this.idDirector])) {
            this.unDrawBrick();
            this.xPosition--;
            this.drawBrick();
        }
    }

    moveRight() {
        if(!this.checkContact(this.xPosition+1, this.yPosition,this.shape[this.idDirector])) {
            this.unDrawBrick();
            this.xPosition++;
            this.drawBrick();
        }
    }
    moveDown() {
        if(!this.checkContact(this.xPosition, this.yPosition+1,this.shape[this.idDirector])){
            this.unDrawBrick();
            this.yPosition++;
            this.drawBrick();
         }else {
          return true;
        }
    }
    turnBrick() {
        if (!this.checkContact(this.xPosition, this.yPosition,this.shape[(this.idDirector+1)%4])) {
            this.unDrawBrick();
            this.idDirector = (this.idDirector + 1) % 4;
            this.drawBrick();
        }
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
    lockBrick() {
        for (let i = 0; i < this.shape[this.shapePosition].length; i++) {
            for (let j = 0; j < this.shape[this.shapePosition][0].length; j++) {
                if (this.shape[this.shapePosition][i][j] !== 7) {
                    board.table[this.yPosition + i][this.xPosition + j] = this.idShape;
                }
            }
        }
         return board.table
    }
}
function lockBrick(){

}
function makeBrick(){
    return new Brick(Math.floor(Math.random()*7%7),Math.floor(Math.random()*4%4));
}
let brick=makeBrick()
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
            if(brick.moveDown()){
                brick=makeBrick();
                console.log(brick.lockBrick())
            }
            break;
    }
})
let board = new Board(ctx);
board.drawBoard()



