//给你一个 <code>m x n</code> 的矩阵 <code>board</code> ，由若干字符 <code>'X'</code> 和 <code>'O'</code> ，找到所有被 <code>'X'</code> 围绕的区域，并将这些区域里所有的 <code>'O'</code> 用 <code>'X'</code> 填充。
//<div class="original__bRMd">
//<div>
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg" style="width: 550px; height: 237px;" />
//<pre>
//<strong>输入：</strong>board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
//<strong>输出：</strong>[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
//<strong>解释：</strong>被围绕的区间不会存在于边界上，换句话说，任何边界上的 <code>'O'</code> 都不会被填充为 <code>'X'</code>。 任何不在边界上，或不与边界上的 <code>'O'</code> 相连的 <code>'O'</code> 最终都会被填充为 <code>'X'</code>。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>board = [["X"]]
//<strong>输出：</strong>[["X"]]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>m == board.length</code></li>
//	<li><code>n == board[i].length</code></li>
//	<li><code>1 <= m, n <= 200</code></li>
//	<li><code>board[i][j]</code> 为 <code>'X'</code> 或 <code>'O'</code></li>
//</ul>
//</div>
//</div>
//<div><div>Related Topics</div><div><li>深度优先搜索</li><li>广度优先搜索</li><li>并查集</li><li>数组</li><li>矩阵</li></div></div><br><div><li>👍 740</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//深度优先搜索
var solve = function (board) {
  const n = board.length
  const m = board[0].length

  //定义dfs函数，从最外层开始找到不被包裹住的‘O’，将之改变为‘A’来保护
  const dfs = (board, x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= m || board[x][y] !== 'O') {
      return
    }
    board[x][y] = 'A'
    dfs(board, x + 1, y)
    dfs(board, x - 1, y)
    dfs(board, x, y + 1)
    dfs(board, x, y - 1)
  }
  //从外层遍历每个可能不被包裹的‘O’
  for (let i = 0; i < n; i++) {
    dfs(board,i,m-1)
    dfs(board,i,0)
  }
  for (let i = 0; i < m; i++){
    dfs(board,n-1,i)
    dfs(board,0,i)
  }

  //还原‘A’为‘O’，并把未被保护的‘O’变成‘X’
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if(board[i][j] === 'A'){
        board[i][j] = 'O'
      } else if(board[i][j] === 'O'){
        board[i][j] = 'X'
      }
    }
  }


};
//leetcode submit region end(Prohibit modification and deletion)
