//<p>给定一个正整数&nbsp;<code>n</code>&nbsp;，将其拆分为 <code>k</code> 个 <strong>正整数</strong> 的和（&nbsp;<code>k &gt;= 2</code>&nbsp;），并使这些整数的乘积最大化。</p>
//
//<p>返回 <em>你可以获得的最大乘积</em>&nbsp;。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1:</strong></p>
//
//<pre>
//<strong>输入: </strong>n = 2
//<strong>输出: </strong>1
//<strong>解释: </strong>2 = 1 + 1, 1 × 1 = 1。</pre>
//
//<p><strong>示例&nbsp;2:</strong></p>
//
//<pre>
//<strong>输入: </strong>n = 10
//<strong>输出: </strong>36
//<strong>解释: </strong>10 = 3 + 3 + 4, 3 ×&nbsp;3 ×&nbsp;4 = 36。</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示:</strong></p>
//
//<ul>
//	<li><code>2 &lt;= n &lt;= 58</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数学</li><li>动态规划</li></div></div><br><div><li>👍 738</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[i],dp[i - j] * j, (i - j) * j)
    }
  }
  return dp[n]
};
// https://www.programmercarl.com/0343.%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86.html#%E6%80%9D%E8%B7%AF
//leetcode submit region end(Prohibit modification and deletion)
