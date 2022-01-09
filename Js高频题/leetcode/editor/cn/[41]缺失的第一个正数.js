//<p>给你一个未排序的整数数组 <code>nums</code> ，请你找出其中没有出现的最小的正整数。</p>
//请你实现时间复杂度为 <code>O(n)</code> 并且只使用常数级别额外空间的解决方案。
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1,2,0]
//<strong>输出：</strong>3
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [3,4,-1,1]
//<strong>输出：</strong>2
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [7,8,9,11,12]
//<strong>输出：</strong>1
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= nums.length <= 5 * 10<sup>5</sup></code></li>
//	<li><code>-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>哈希表</li></div></div><br><div><li>👍 1305</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */


//遍历一次数组把大于等于1的和小于数组大小的值放到原数组对应位置，然后再遍历一次数组查当前下标是否和值对应，
// 如果不对应那这个下标就是答案，否则遍历完都没出现那么答案就是数组长度加1。
var firstMissingPositive = function (nums) {
  const nums2 = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 1 && nums[i] <= nums.length) {
      nums2[nums[i] - 1] = nums[i]
    }
  }
  let i
  for (i = 0; i < nums.length; i++) {
    if (nums2[i] !== i + 1) {
      break
    }
  }
  return i + 1
};
//leetcode submit region end(Prohibit modification and deletion

firstMissingPositive([1, 2, 0])
//简单方法：用map表
var firstMissingPositive1 = function (nums) {
  //用map表记录所有出现的正整数
  const map = new Map()
  nums.forEach((i) => {
    map.set(i, 1)
  })
  for (let i = 1; i < nums.length; i++) {
    if (!map.get(i)) {
      return i
    }
  }
};