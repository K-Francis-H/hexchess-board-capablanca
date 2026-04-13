import { Position } from './position';
import { King } from './king';
export class Chancellor {
    constructor(color, position) {
        this.color = color;
        this.position = position;
    }
    /*Knight moves*/
    _validatePosition(position, board) {
        if (position === null) {
            return false;
        }
        const piece = board.getPiece(position.toSquare());
        if (piece === null) {
            return true;
        }
        return piece.color !== this.color && !(piece instanceof King);
    }
    _topTwoSquares(board) {
        const oneSquareUp = this.position.getTopPosition();
        if (oneSquareUp === null) {
            return [null, null];
        }
        const twoSquareUp = oneSquareUp.getTopPosition();
        if (twoSquareUp === null) {
            return [null, null];
        }
        const leftPos = twoSquareUp.getTopLeftPosition();
        const leftSquare = this._validatePosition(leftPos, board) ? leftPos : null;
        const rightPos = twoSquareUp.getTopRightPosition();
        const rightSquare = this._validatePosition(rightPos, board)
            ? rightPos
            : null;
        return [leftSquare, rightSquare];
    }
    _topRightTwoSquares(board) {
        const oneSquareTopRight = this.position.getTopRightPosition();
        if (oneSquareTopRight === null) {
            return [null, null];
        }
        const twoSquareTopRight = oneSquareTopRight.getTopRightPosition();
        if (twoSquareTopRight === null) {
            return [null, null];
        }
        const topPos = twoSquareTopRight.getTopPosition();
        const topSquare = this._validatePosition(topPos, board) ? topPos : null;
        const bottomRightPos = twoSquareTopRight.getBottomRightPosition();
        const bottomRightSquare = this._validatePosition(bottomRightPos, board)
            ? bottomRightPos
            : null;
        return [topSquare, bottomRightSquare];
    }
    _bottomRightTwoSquares(board) {
        const oneSquareBottomRight = this.position.getBottomRightPosition();
        if (oneSquareBottomRight === null) {
            return [null, null];
        }
        const twoSquareBottomRight = oneSquareBottomRight.getBottomRightPosition();
        if (twoSquareBottomRight === null) {
            return [null, null];
        }
        const topRightPos = twoSquareBottomRight.getTopRightPosition();
        const topRightSquare = this._validatePosition(topRightPos, board)
            ? topRightPos
            : null;
        const bottomPos = twoSquareBottomRight.getBottomPosition();
        const bottomSquare = this._validatePosition(bottomPos, board)
            ? bottomPos
            : null;
        return [topRightSquare, bottomSquare];
    }
    _bottomTwoSquares(board) {
        const oneSquareDown = this.position.getBottomPosition();
        if (oneSquareDown === null) {
            return [null, null];
        }
        const twoSquareDown = oneSquareDown.getBottomPosition();
        if (twoSquareDown === null) {
            return [null, null];
        }
        const bottomRightPos = twoSquareDown.getBottomRightPosition();
        const bottomRightSquare = this._validatePosition(bottomRightPos, board)
            ? bottomRightPos
            : null;
        const bottomLeftPos = twoSquareDown.getBottomLeftPosition();
        const bottomLeftSquare = this._validatePosition(bottomLeftPos, board)
            ? bottomLeftPos
            : null;
        return [bottomRightSquare, bottomLeftSquare];
    }
    _bottomLeftTwoSquares(board) {
        const oneSquareBottomLeft = this.position.getBottomLeftPosition();
        if (oneSquareBottomLeft === null) {
            return [null, null];
        }
        const twoSquareBottomLeft = oneSquareBottomLeft.getBottomLeftPosition();
        if (twoSquareBottomLeft === null) {
            return [null, null];
        }
        const bottomPos = twoSquareBottomLeft.getBottomPosition();
        const bottomSquare = this._validatePosition(bottomPos, board)
            ? bottomPos
            : null;
        const topLeftPos = twoSquareBottomLeft.getTopLeftPosition();
        const topLeftSquare = this._validatePosition(topLeftPos, board)
            ? topLeftPos
            : null;
        return [bottomSquare, topLeftSquare];
    }
    _topLeftTwoSquares(board) {
        const oneSquareTopLeft = this.position.getTopLeftPosition();
        if (oneSquareTopLeft === null) {
            return [null, null];
        }
        const twoSquareTopLeft = oneSquareTopLeft.getTopLeftPosition();
        if (twoSquareTopLeft === null) {
            return [null, null];
        }
        const topPos = twoSquareTopLeft.getTopPosition();
        const topSquare = this._validatePosition(topPos, board) ? topPos : null;
        const bottomLeftPos = twoSquareTopLeft.getBottomLeftPosition();
        const bottomLeftSquare = this._validatePosition(bottomLeftPos, board)
            ? bottomLeftPos
            : null;
        return [topSquare, bottomLeftSquare];
    }
    /*Rook moves*/
    _getTopPositions(board, getSquare) {
        return this.position.getAllTopPositions((pos) => getSquare(this.color, pos, board, () => pos.getTopPosition()));
    }
    _getTopRightPositions(board, getSquare) {
        return this.position.getAllTopRightPositions((pos) => getSquare(this.color, pos, board, () => pos.getTopRightPosition()));
    }
    _getBottomRightPositions(board, getSquare) {
        return this.position.getAllBottomRightPositions((pos) => getSquare(this.color, pos, board, () => pos.getBottomRightPosition()));
    }
    _getBottomPositions(board, getSquare) {
        return this.position.getAllBottomPositions((pos) => getSquare(this.color, pos, board, () => pos.getBottomPosition()));
    }
    _getBottomLeftPositions(board, getSquare) {
        return this.position.getAllBottomLeftPositions((pos) => getSquare(this.color, pos, board, () => pos.getBottomLeftPosition()));
    }
    _getTopLeftPositions(board, getSquare) {
        return this.position.getAllTopLeftPositions((pos) => getSquare(this.color, pos, board, () => pos.getTopLeftPosition()));
    }
    _allSquareMovesRook(board) {
        const getSquare = (color, position, board, getNextPos) => {
            return Position.canGetNextPosition(color, position, board, getNextPos);
        };
        const topPositions = this._getTopPositions(board, getSquare);
        const topRightPositions = this._getTopRightPositions(board, getSquare);
        const bottomRightPositions = this._getBottomRightPositions(board, getSquare);
        const bottomPositions = this._getBottomPositions(board, getSquare);
        const bottomLeftPositions = this._getBottomLeftPositions(board, getSquare);
        const topLeftPositions = this._getTopLeftPositions(board, getSquare);
        return [
            ...topPositions,
            ...topRightPositions,
            ...bottomRightPositions,
            ...bottomPositions,
            ...bottomLeftPositions,
            ...topLeftPositions,
        ];
    }
    _allSquareMovesKnight(board) {
        return [
            ...this._topTwoSquares(board),
            ...this._topRightTwoSquares(board),
            ...this._bottomRightTwoSquares(board),
            ...this._bottomTwoSquares(board),
            ...this._bottomLeftTwoSquares(board),
            ...this._topLeftTwoSquares(board),
        ].filter((pos) => pos !== null);
    }
    allSquareMoves(board) {
        return this._allSquareMovesRook(board).concat(this._allSquareMovesKnight(board));
    }
    _defendedSquaresRook(board) {
        const topPositions = Position.getAllDefendedPositionsInDirection(this.position, board, (pos) => pos.getTopPosition());
        const topRightPositions = Position.getAllDefendedPositionsInDirection(this.position, board, (pos) => pos.getTopRightPosition());
        const bottomRightPositions = Position.getAllDefendedPositionsInDirection(this.position, board, (pos) => pos.getBottomRightPosition());
        const bottomPositions = Position.getAllDefendedPositionsInDirection(this.position, board, (pos) => pos.getBottomPosition());
        const bottomLeftPositions = Position.getAllDefendedPositionsInDirection(this.position, board, (pos) => pos.getBottomLeftPosition());
        const topLeftPositions = Position.getAllDefendedPositionsInDirection(this.position, board, (pos) => pos.getTopLeftPosition());
        return [
            ...topPositions,
            ...topRightPositions,
            ...bottomRightPositions,
            ...bottomPositions,
            ...bottomLeftPositions,
            ...topLeftPositions,
        ];
    }
    _defendedSquaresKnight(_board) {
        const topTwo = this.position.getTopPosition()?.getTopPosition();
        const topRightTwo = this.position
            .getTopRightPosition()
            ?.getTopRightPosition();
        const bottomRightTwo = this.position
            .getBottomRightPosition()
            ?.getBottomRightPosition();
        const bottomTwo = this.position.getBottomPosition()?.getBottomPosition();
        const bottomLeftTwo = this.position
            .getBottomLeftPosition()
            ?.getBottomLeftPosition();
        const topLeftTwo = this.position.getTopLeftPosition()?.getTopLeftPosition();
        return [
            topTwo?.getTopLeftPosition(),
            topTwo?.getTopRightPosition(),
            topRightTwo?.getTopPosition(),
            topRightTwo?.getBottomRightPosition(),
            bottomRightTwo?.getTopRightPosition(),
            bottomRightTwo?.getBottomPosition(),
            bottomTwo?.getBottomRightPosition(),
            bottomTwo?.getBottomLeftPosition(),
            bottomLeftTwo?.getBottomPosition(),
            bottomLeftTwo?.getTopLeftPosition(),
            topLeftTwo?.getBottomLeftPosition(),
            topLeftTwo?.getTopPosition(),
        ].filter((pos) => pos !== null && pos !== undefined);
    }
    defendedSquares(board) {
        return this._defendedSquaresRook(board).concat(this._defendedSquaresKnight(board));
    }
    toString() {
        return this.color === 'white' ? 'C' : 'c';
    }
}
//# sourceMappingURL=chancellor.js.map