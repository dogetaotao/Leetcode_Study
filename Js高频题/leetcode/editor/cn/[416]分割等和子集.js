//<p>给你一个 <strong>只包含正整数 </strong>的 <strong>非空 </strong>数组 <code>nums</code> 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1,5,11,5]
//<strong>输出：</strong>true
//<strong>解释：</strong>数组可以分割成 [1, 5, 5] 和 [11] 。</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1,2,3,5]
//<strong>输出：</strong>false
//<strong>解释：</strong>数组不能分割成两个元素和相等的子集。
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= nums.length <= 200</code></li>
//	<li><code>1 <= nums[i] <= 100</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>动态规划</li></div></div><br><div><li>👍 1186</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */


//化成0-1背包问题（压缩成一维的写法）
var canPartition = function (nums) {
  let sum = nums.reduce((x, y) => x + y)
  if (sum & 1) return false
  const all = sum >> 1
  const dp = new Array(all + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    //逆序遍历防止j较小时，前面数组更改，到j较大时，dp[j - nums[i]]采用了更改后的值
    for (let j = all; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      if (dp[i] === all) return true
    }
  }

  return dp[all] === all
};

//二维的0-1背包问题
var canPartition1 = function (nums) {
  let sum = nums.reduce((x, y) => x + y)
  if (sum & 1) return false
  const all = sum >> 1
  const dp = new Array(nums.length + 1).fill().map(i => Array(all + 1).fill(0))
  //留出dp[0][x]，让i从1开始遍历，防止出现i-1<0的数组越界情况
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (j >= nums[i])
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i])
      else
        dp[i][j] = dp[i - 1][j]
    }
  }
  return dp[nums.length][all] === all
};

canPartition([1, 5, 11, 5])
//leetcode submit region end(Prohibit modification and deletion)
