//<p>请你判断一个&nbsp;<code>9 x 9</code> 的数独是否有效。只需要<strong> 根据以下规则</strong> ，验证已经填入的数字是否有效即可。</p>
//
//<ol>
//	<li>数字&nbsp;<code>1-9</code>&nbsp;在每一行只能出现一次。</li>
//	<li>数字&nbsp;<code>1-9</code>&nbsp;在每一列只能出现一次。</li>
//	<li>数字&nbsp;<code>1-9</code>&nbsp;在每一个以粗实线分隔的&nbsp;<code>3x3</code>&nbsp;宫内只能出现一次。（请参考示例图）</li>
//</ol>
//
//<p>&nbsp;</p>
//
//<p><strong>注意：</strong></p>
//
//<ul>
//	<li>一个有效的数独（部分已被填充）不一定是可解的。</li>
//	<li>只需要根据以上规则，验证已经填入的数字是否有效即可。</li>
//	<li>空白格用&nbsp;<code>'.'</code>&nbsp;表示。</li>
//</ul>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png" style="height:250px; width:250px" />
//<pre>
//<strong>输入：</strong>board = 
//[["5","3",".",".","7",".",".",".","."]
//,["6",".",".","1","9","5",".",".","."]
//,[".","9","8",".",".",".",".","6","."]
//,["8",".",".",".","6",".",".",".","3"]
//,["4",".",".","8",".","3",".",".","1"]
//,["7",".",".",".","2",".",".",".","6"]
//,[".","6",".",".",".",".","2","8","."]
//,[".",".",".","4","1","9",".",".","5"]
//,[".",".",".",".","8",".",".","7","9"]]
//<strong>输出：</strong>true
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>board = 
//[["8","3",".",".","7",".",".",".","."]
//,["6",".",".","1","9","5",".",".","."]
//,[".","9","8",".",".",".",".","6","."]
//,["8",".",".",".","6",".",".",".","3"]
//,["4",".",".","8",".","3",".",".","1"]
//,["7",".",".",".","2",".",".",".","6"]
//,[".","6",".",".",".",".","2","8","."]
//,[".",".",".","4","1","9",".",".","5"]
//,[".",".",".",".","8",".",".","7","9"]]
//<strong>输出：</strong>false
//<strong>解释：</strong>除了第一行的第一个数字从<strong> 5</strong> 改为 <strong>8 </strong>以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>board.length == 9</code></li>
//	<li><code>board[i].length == 9</code></li>
//	<li><code>board[i][j]</code> 是一位数字（<code>1-9</code>）或者 <code>'.'</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>哈希表</li><li>矩阵</li></div></div><br><div><li>👍 734</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const col = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const sub = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j]
      if (c !== '.') {
        const index = c.charCodeAt() - '0'.charCodeAt() - 1
        rows[i][index]++
        col[j][index]++
        sub[Math.floor(i / 3)][Math.floor(j / 3)][index]++
        if (rows[i][index] > 1 || col[j][index] > 1 || sub[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false
        }
      }
    }
  }
  return true
};
//leetcode submit region end(Prohibit modification and deletion)

isValidSudoku1([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
var isValidSudoku1 = function (board) {
  let map
  //判断一行有没有重复的
  for (let arr of board) {
    map = {}
    for (let ch of arr) {
      if (ch !== ".") {
        if (map[ch]) return false
        map[ch] = true
      }
    }
  }
  //判断每一列有没有重复
  for (let i = 0; i < 9; i++) {
    map = {}
    for (let j = 0; j < 9; j++) {
      const ch = board[j][i]
      if (ch !== ".") {
        if (map[ch]) return false
        map[ch] = true
      }
    }
  }
  //判断每个九宫格有没有重复(矩阵)
  let grid = Array.from({length: 3}, () =>
    Array.from({length: 3}, () => [])
  )
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      grid[i / 3 | 0][j / 3 | 0].push(board[i][j])
    }
  }
  console.log(grid)
  for (let arr of grid.flat()) {
    map = {}
    for (let ch of arr) {
      if (ch !== ".") {
        if (map[ch]) return false
        map[ch] = true
      }
    }
  }
  return true

};