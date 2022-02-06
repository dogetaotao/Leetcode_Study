//<p>给定一个 <code>m x n</code> 二维字符网格 <code>board</code> 和一个字符串单词 <code>word</code> 。如果 <code>word</code> 存在于网格中，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>
//
//<p>单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/word2.jpg" style="width: 322px; height: 242px;" />
//<pre>
//<strong>输入：</strong>board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
//<strong>输出：</strong>true
//</pre>
//
//<p><strong>示例 2：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg" style="width: 322px; height: 242px;" />
//<pre>
//<strong>输入：</strong>board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
//<strong>输出：</strong>true
//</pre>
//
//<p><strong>示例 3：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/10/15/word3.jpg" style="width: 322px; height: 242px;" />
//<pre>
//<strong>输入：</strong>board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
//<strong>输出：</strong>false
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>m == board.length</code></li>
//	<li><code>n = board[i].length</code></li>
//	<li><code>1 <= m, n <= 6</code></li>
//	<li><code>1 <= word.length <= 15</code></li>
//	<li><code>board</code> 和 <code>word</code> 仅由大小写英文字母组成</li>
//</ul>
//
//<p> </p>
//
//<p><strong>进阶：</strong>你可以使用搜索剪枝的技术来优化解决方案，使其在 <code>board</code> 更大的情况下可以更快解决问题？</p>
//<div><div>Related Topics</div><div><li>数组</li><li>回溯</li><li>矩阵</li></div></div><br><div><li>👍 1166</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//深度优先搜索
var exist = function (board, word) {
  const m = board.length
    , n = board[0].length
  //方向数组
  const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  //记录每个位置有没有被确定过
  const visited = new Array(m).fill(false).map(() => new Array(n).fill(false))
  //从任意位置开始确认
  const check = (i, j, k) => {
    if (board[i][j] !== word.charAt(k)) return false
    else if (k === word.length - 1) return true

    visited[i][j] = true
    let result = false
    for (const [dx, dy] of direction) {
      let newI = dx + i
      let newJ = dy + j
      if (newI >= 0 && newJ >= 0 && newI < m && newJ < n) {
        if (!visited[newI][newJ]) {
          //深度优先搜索
          const flag = check(newI, newJ, k + 1)
          if (flag) {
            result = true
            break
          }
        }
      }
    }
    //下一次从头开始搜索要确定每个位置都是false状态
    visited[i][j] = false
    return result
  }

  for (let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++){
      const flag = check(i, j, 0)
      if(flag){
        return true
      }
    }
  }

  return false
};

exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]])
//leetcode submit region end(Prohibit modification and deletion)
