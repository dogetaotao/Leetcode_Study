//<p>给你一个整数数组 <code>nums</code> ，其中元素已经按 <strong>升序</strong> 排列，请你将其转换为一棵 <strong>高度平衡</strong> 二叉搜索树。</p>
//
//<p><strong>高度平衡 </strong>二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" style="width: 302px; height: 222px;" />
//<pre>
//<strong>输入：</strong>nums = [-10,-3,0,5,9]
//<strong>输出：</strong>[0,-3,9,-10,null,5]
//<strong>解释：</strong>[0,-10,5,null,-3,null,9] 也将被视为正确答案：
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg" style="width: 302px; height: 222px;" />
//</pre>
//
//<p><strong>示例 2：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" style="width: 342px; height: 142px;" />
//<pre>
//<strong>输入：</strong>nums = [1,3]
//<strong>输出：</strong>[3,1]
//<strong>解释：</strong>[1,3] 和 [3,1] 都是高度平衡二叉搜索树。
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= nums.length <= 10<sup>4</sup></code></li>
//	<li><code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code></li>
//	<li><code>nums</code> 按 <strong>严格递增</strong> 顺序排列</li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>二叉搜索树</li><li>数组</li><li>分治</li><li>二叉树</li></div></div><br><div><li>👍 953</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const helper = (left, right) => {
    if (left > right) {
      return null
    }
    let mid = left + ((right - left)>>1)
    console.log(mid)
    return new TreeNode(nums[mid], helper(left, mid - 1), helper(mid + 1, right))
  }
  return helper(0,nums.length-1)
};
//leetcode submit region end(Prohibit modification and deletion)
