class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // check each rows have in duplicate
        for (let row = 0; row < board.length; row++) {
            let seen = new Set();

            for (let i = 0; i < board[0].length; i++) {
                if (board[row][i] === ".") continue;
                if (seen.has(board[row][i])) return false;
                seen.add(board[row][i]);
            }
        }

        // check each columns have in duplicate
        for (let col = 0; col < board.length; col++) {
            let seen = new Set();

            for (let i = 0; i < board[0].length; i++) {
                if (board[i][col] === ".") continue;
                if (seen.has(board[i][col])) return false;
                seen.add(board[i][col]);
            }
        }

        // check each 3*3 box have in duplicate
        for (let sqr = 0; sqr < 9; sqr++) {
            let seen = new Set();
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    let r = Math.floor(sqr / 3) * 3 + row;
                    let c = (sqr % 3) * 3 + col;
                    if (board[r][c] === ".") continue;
                    if (seen.has(board[r][c])) return false;
                    seen.add(board[r][c]);
                }
            }
        }

        return true;
    }
}
