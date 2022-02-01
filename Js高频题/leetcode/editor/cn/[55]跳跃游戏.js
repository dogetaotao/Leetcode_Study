//<p>给定一个非负整数数组 <code>nums</code> ，你最初位于数组的 <strong>第一个下标</strong> 。</p>
//
//<p>数组中的每个元素代表你在该位置可以跳跃的最大长度。</p>
//
//<p>判断你是否能够到达最后一个下标。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [2,3,1,1,4]
//<strong>输出：</strong>true
//<strong>解释：</strong>可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [3,2,1,0,4]
//<strong>输出：</strong>false
//<strong>解释：</strong>无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= nums.length <= 3 * 10<sup>4</sup></code></li>
//	<li><code>0 <= nums[i] <= 10<sup>5</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>贪心</li><li>数组</li><li>动态规划</li></div></div><br><div><li>👍 1577</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//最优解
var canJump = function (nums) {
  //如果能到达某一点，那包括此点及其左侧所有点均可到达
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > k) return false
    k = Math.max(k, i + nums[i])
  }
  return true
};
//leetcode submit region end(Prohibit modification and deletion)

//贪心算法
var canJump1 = function (nums) {
  if (nums.length === 1) return true; //长度为1 直接就是终点
  let cover = nums[0]; //能覆盖的最远距离
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]); //当前覆盖距离cover和当前位置加能跳跃的距离中取一个较大者
    if (cover >= nums.length - 1) {
      //覆盖距离超过或等于nums.length - 1 说明能到达终点
      return true;
    }
  }
  return false; //循环完成之后 还没返回true 就是不能达到终点
};

//动态规划
var canJump2 = function (nums) {
  let dp = new Array(nums.length).fill(false); //初始化dp
  dp[0] = true; //第一项能到达
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      //当前位置j能达到，并且当前位置j加上能到达的位置如果超过了i，那dp[i]更新为ture，便是i位置也可以到达
      if (dp[j] && nums[j] + j >= i) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[nums.length - 1];

};