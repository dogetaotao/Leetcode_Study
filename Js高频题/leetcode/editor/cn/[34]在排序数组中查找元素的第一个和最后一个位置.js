//<p>给定一个按照升序排列的整数数组 <code>nums</code>，和一个目标值 <code>target</code>。找出给定目标值在数组中的开始位置和结束位置。</p>
//
//<p>如果数组中不存在目标值 <code>target</code>，返回 <code>[-1, -1]</code>。</p>
//
//<p><strong>进阶：</strong></p>
//
//<ul>
//	<li>你可以设计并实现时间复杂度为 <code>O(log n)</code> 的算法解决此问题吗？</li>
//</ul>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [<code>5,7,7,8,8,10]</code>, target = 8
//<strong>输出：</strong>[3,4]</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [<code>5,7,7,8,8,10]</code>, target = 6
//<strong>输出：</strong>[-1,-1]</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [], target = 0
//<strong>输出：</strong>[-1,-1]</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>0 <= nums.length <= 10<sup>5</sup></code></li>
//	<li><code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code></li>
//	<li><code>nums</code> 是一个非递减数组</li>
//	<li><code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>二分查找</li></div></div><br><div><li>👍 1382</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//二分法
var searchRange = function (nums, target) {

  if (nums.length === 0) {
    return [-1, -1]
  }
  let [left, right] = [0, nums.length - 1]
  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] === target) {
      let l = mid
      let r = mid
      while (nums[l] === target) {
        l--
      }
      while (nums[r] === target) {
        r++
      }
      return [l + 1, r - 1]
    }
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return nums[left + 1] === target ? [left + 1, left + 1] : [-1, -1]

};
//leetcode submit region end(Prohibit modification and deletion)
