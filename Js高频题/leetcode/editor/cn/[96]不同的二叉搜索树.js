//<p>给你一个整数 <code>n</code> ，求恰由 <code>n</code> 个节点组成且节点值从 <code>1</code> 到 <code>n</code> 互不相同的 <strong>二叉搜索树</strong> 有多少种？返回满足题意的二叉搜索树的种数。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg" style="width: 600px; height: 148px;" />
//<pre>
//<strong>输入：</strong>n = 3
//<strong>输出：</strong>5
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>n = 1
//<strong>输出：</strong>1
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= n <= 19</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>二叉搜索树</li><li>数学</li><li>动态规划</li><li>二叉树</li></div></div><br><div><li>👍 1608</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  //dp[3] = dp[2] * dp[0] + dp[1] * dp[1] + dp[2] * dp[0]
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[i - j] * dp[j - 1]
    }
  }
  return dp[n]
};

numTrees(3)
//leetcode submit region end(Prohibit modification and deletion)
