//<p>给定一个包含红色、白色和蓝色，一共 <code>n</code><em> </em>个元素的数组，<strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地</a></strong>对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。</p>
//
//<p>此题中，我们使用整数 <code>0</code>、 <code>1</code> 和 <code>2</code> 分别表示红色、白色和蓝色。</p>
//
//<ul>
//</ul>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [2,0,2,1,1,0]
//<strong>输出：</strong>[0,0,1,1,2,2]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [2,0,1]
//<strong>输出：</strong>[0,1,2]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [0]
//<strong>输出：</strong>[0]
//</pre>
//
//<p><strong>示例 4：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1]
//<strong>输出：</strong>[1]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>n == nums.length</code></li>
//	<li><code>1 <= n <= 300</code></li>
//	<li><code>nums[i]</code> 为 <code>0</code>、<code>1</code> 或 <code>2</code></li>
//</ul>
//
//<p> </p>
//
//<p><strong>进阶：</strong></p>
//
//<ul>
//	<li>你可以不使用代码库中的排序函数来解决这道题吗？</li>
//	<li>你能想出一个仅使用常数空间的一趟扫描算法吗？</li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>双指针</li><li>排序</li></div></div><br><div><li>👍 1132</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

  let L = nums.length
  //p0前所有元素均为0，p1前所有元素均为1和0
  let p0 = 0, p1 = 0
  for (let i = 0; i < L; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]]
      //如果p0<p1，此时交换情况为把1交换到了i的位置上
      if (p0 < p1) {
        [nums[i], nums[p1]] = [nums[p1], nums[i]]
      }
      p0++
      p1++
    } else if (nums[i] === 1) {
      [nums[i], nums[p1]] = [nums[p1],nums[i]]
      p1++
    }
  }
};

sortColors([2, 0, 1, 0, 2, 0, 2, 0, 1])
//leetcode submit region end(Prohibit modification and deletion)
