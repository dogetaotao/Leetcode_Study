//<p>给定两个大小分别为 <code>m</code> 和 <code>n</code> 的正序（从小到大）数组&nbsp;<code>nums1</code> 和&nbsp;<code>nums2</code>。请你找出并返回这两个正序数组的 <strong>中位数</strong> 。</p>
//
//<p>算法的时间复杂度应该为 <code>O(log (m+n))</code> 。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums1 = [1,3], nums2 = [2]
//<strong>输出：</strong>2.00000
//<strong>解释：</strong>合并数组 = [1,2,3] ，中位数 2
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums1 = [1,2], nums2 = [3,4]
//<strong>输出：</strong>2.50000
//<strong>解释：</strong>合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums1 = [0,0], nums2 = [0,0]
//<strong>输出：</strong>0.00000
//</pre>
//
//<p><strong>示例 4：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums1 = [], nums2 = [1]
//<strong>输出：</strong>1.00000
//</pre>
//
//<p><strong>示例 5：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums1 = [2], nums2 = []
//<strong>输出：</strong>2.00000
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>nums1.length == m</code></li>
//	<li><code>nums2.length == n</code></li>
//	<li><code>0 &lt;= m &lt;= 1000</code></li>
//	<li><code>0 &lt;= n &lt;= 1000</code></li>
//	<li><code>1 &lt;= m + n &lt;= 2000</code></li>
//	<li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>二分查找</li><li>分治</li></div></div><br><div><li>👍 4832</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  //手写归并排序的写法
  let ans
  // if (nums1.length === 0 && nums2.length === 0) {
  //   return 0
  // } else if (nums1.length === 0 && nums2.length !== 0) {
  //   ans = findMiddle(nums2)
  // } else if (nums2.length === 0 && nums1.length !== 0) {
  //   ans = findMiddle(nums1)
  // } else {
  const nums3 = [...nums1, ...nums2]
  const l1 = nums1.length
  let i = 0
  let j = 0
  let k = 0
  const nums4 = []
  while (i < l1 && l1 + j < nums3.length) {
    if (nums3[i] <= nums3[l1 + j]) {
      nums4[k++] = nums3[i++]
    } else {
      nums4[k++] = nums3[l1 + j++]
    }
  }
  while (i < l1) {
    nums4[k++] = nums3[i++]
  }
  while (l1 + j < nums3.length) {
    nums4[k++] = nums3[l1 + j++]
  }

  ans = findMiddle(nums4)
  // }
  return ans

};

var findMedianSortedArrays2 = function (nums1, nums2) {
  //调用数组排序的算法
  let ans
  let p1 = nums1
  let p2 = nums2
  let p3 = [...p1, ...p2]
  let p4 = p3.sort()
  ans = findMiddle(p4)
  return ans
};

var findMiddle = function (nums) {
  let middle
  if (nums.length % 2 === 0) {
    middle = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2
  } else {
    middle = nums[Math.floor(nums.length / 2)]
  }
  return middle
}


findMedianSortedArrays2([1, 2], [3, 4])

//leetcode submit region end(Prohibit modification and deletion)

