//<p>给你一个 <code>m</code> 行 <code>n</code> 列的矩阵 <code>matrix</code> ，请按照 <strong>顺时针螺旋顺序</strong> ，返回矩阵中的所有元素。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg" style="width: 242px; height: 242px;" />
//<pre>
//<strong>输入：</strong>matrix = [[1,2,3],[4,5,6],[7,8,9]]
//<strong>输出：</strong>[1,2,3,6,9,8,7,4,5]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg" style="width: 322px; height: 242px;" />
//<pre>
//<strong>输入：</strong>matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//<strong>输出：</strong>[1,2,3,4,8,12,11,10,9,5,6,7]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>m == matrix.length</code></li>
//	<li><code>n == matrix[i].length</code></li>
//	<li><code>1 <= m, n <= 10</code></li>
//	<li><code>-100 <= matrix[i][j] <= 100</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>矩阵</li><li>模拟</li></div></div><br><div><li>👍 957</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }

  const rows = matrix.length, cols = matrix[0].length
  const order = []
  let left = 0, right = cols - 1, top = 0, bottom = rows - 1
  while(left <= right && top <= bottom){
    for(let col = left; col <= right; col++){
      order.push(matrix[top][col])
    }
    for(let row = top + 1; row <= bottom; row++){
      order.push(matrix[row][right])
    }
    //可以往左移动的条件，防止right - 1小于0
    if(left < right && top < bottom){
      for(let col = right - 1; col > left; col--){
        order.push(matrix[bottom][col])
      }
      for (let row = bottom; row > top; row--){
        order.push(matrix[row][left])
      }
    }
    [left, right, top, bottom] = [++left, --right, ++top, --bottom]
  }
  return order

};


//leetcode submit region end(Prohibit modification and deletion)


var spiralOrder1 = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }
  const rows = matrix.length, cols = matrix[0].length
  //记录此处时候走过
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false))
  const total = rows * cols
  const order = new Array(total).fill(0)

  let directionIndex = 0, row = 0, col = 0
  //directions表示四种前进方向，[0,1]表示向右[1,0]表示向下[0,-1]表示向左[-1,0]表示向上
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  for (let i = 0; i < total; i++) {
    order[i] = matrix[row][col]
    visited[row][col] = true
    const nextRow = row + directions[directionIndex][0], nextCol = col + directions[directionIndex][1]
    //当走到行或列的尽头，或下一步是已经走过的时候，变换前进方向
    if (!(0 <= nextRow && nextRow < rows && 0 <= nextCol && nextCol < cols && !(visited[nextRow][nextCol]))) {
      //通过directionIndex控制前进方向
      directionIndex = (directionIndex + 1) % 4
    }
    row += directions[directionIndex][0]
    col += directions[directionIndex][1]
  }

  return order
};