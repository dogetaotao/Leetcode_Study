//<p>给定一个 <em>n </em>× <em>n</em> 的二维矩阵 <code>matrix</code> 表示一个图像。请你将图像顺时针旋转 90 度。</p>
//
//<p>你必须在<strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a></strong> 旋转图像，这意味着你需要直接修改输入的二维矩阵。<strong>请不要 </strong>使用另一个矩阵来旋转图像。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg" style="width: 642px; height: 242px;" />
//<pre>
//<strong>输入：</strong>matrix = [[1,2,3],[4,5,6],[7,8,9]]
//<strong>输出：</strong>[[7,4,1],[8,5,2],[9,6,3]]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg" style="width: 800px; height: 321px;" />
//<pre>
//<strong>输入：</strong>matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
//<strong>输出：</strong>[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>matrix = [[1]]
//<strong>输出：</strong>[[1]]
//</pre>
//
//<p><strong>示例 4：</strong></p>
//
//<pre>
//<strong>输入：</strong>matrix = [[1,2],[3,4]]
//<strong>输出：</strong>[[3,1],[4,2]]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>matrix.length == n</code></li>
//	<li><code>matrix[i].length == n</code></li>
//	<li><code>1 <= n <= 20</code></li>
//	<li><code>-1000 <= matrix[i][j] <= 1000</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>数学</li><li>矩阵</li></div></div><br><div><li>👍 1118</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  //在每一行先镜像
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      const help = matrix[i][matrix.length - j - 1]
      matrix[i][matrix.length - j - 1] = matrix[i][j]
      matrix[i][j] = help
    }
  }
  //整个表格进行中心对称
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length - i; j++) {
      const help = matrix[i][j]
      matrix[i][j] = matrix[matrix.length - 1 - j][matrix.length- 1 -i]
      matrix[matrix.length - 1 - j][matrix.length- 1 -i] = help
    }
  }
  console.log(matrix)
};
//leetcode submit region end(Prohibit modification and deletion)
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
// console.log(matrix.length)
// const arr = new Array(matrix.length).fill(0).map(()=>new Array(matrix.length).fill(0))
// for (let i = matrix.length - 1; i >= 0 ; i--) {
//   for (let j = 0; j < matrix.length; j++) {
//     arr[j][matrix.length - i - 1] = matrix[i][j]
//   }
// }
//
// matrix = arr
//
// 3 2 1
// 6 5 4
// 9 8 7