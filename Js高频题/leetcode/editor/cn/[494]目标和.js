//<p>给你一个整数数组 <code>nums</code> 和一个整数 <code>target</code> 。</p>
//
//<p>向数组中的每个整数前添加 <code>'+'</code> 或 <code>'-'</code> ，然后串联起所有整数，可以构造一个 <strong>表达式</strong> ：</p>
//
//<ul>
//	<li>例如，<code>nums = [2, 1]</code> ，可以在 <code>2</code> 之前添加 <code>'+'</code> ，在 <code>1</code> 之前添加 <code>'-'</code> ，然后串联起来得到表达式 <code>"+2-1"</code> 。</li>
//</ul>
//
//<p>返回可以通过上述方法构造的、运算结果等于 <code>target</code> 的不同 <strong>表达式</strong> 的数目。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1,1,1,1,1], target = 3
//<strong>输出：</strong>5
//<strong>解释：</strong>一共有 5 种方法让最终目标和为 3 。
//-1 + 1 + 1 + 1 + 1 = 3
//+1 - 1 + 1 + 1 + 1 = 3
//+1 + 1 - 1 + 1 + 1 = 3
//+1 + 1 + 1 - 1 + 1 = 3
//+1 + 1 + 1 + 1 - 1 = 3
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1], target = 1
//<strong>输出：</strong>1
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= nums.length <= 20</code></li>
//	<li><code>0 <= nums[i] <= 1000</code></li>
//	<li><code>0 <= sum(nums[i]) <= 1000</code></li>
//	<li><code>-1000 <= target <= 1000</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>动态规划</li><li>回溯</li></div></div><br><div><li>👍 1102</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((x, y) => x + y)
  if (sum < Math.abs(target)) return 0
  if ((target + sum) % 2) return 0
  const S = (target + sum) / 2

  const dp = new Array(S + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = S; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }

  return dp[S]
};
//leetcode submit region end(Prohibit modification and deletion)
