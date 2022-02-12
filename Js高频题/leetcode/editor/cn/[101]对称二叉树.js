//<p>给你一个二叉树的根节点 <code>root</code> ， 检查它是否轴对称。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg" style="width: 354px; height: 291px;" />
//<pre>
//<strong>输入：</strong>root = [1,2,2,3,4,4,3]
//<strong>输出：</strong>true
//</pre>
//
//<p><strong>示例 2：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg" style="width: 308px; height: 258px;" />
//<pre>
//<strong>输入：</strong>root = [1,2,2,null,3,null,3]
//<strong>输出：</strong>false
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>树中节点数目在范围 <code>[1, 1000]</code> 内</li>
//	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
//</ul>
//
//<p>&nbsp;</p>
//
//<p><strong>进阶：</strong>你可以运用递归和迭代两种方法解决这个问题吗？</p>
//<div><div>Related Topics</div><div><li>树</li><li>深度优先搜索</li><li>广度优先搜索</li><li>二叉树</li></div></div><br><div><li>👍 1731</li><li>👎 0</li></div>

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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

  const check = (l, r) => {
    if (!l && !r) {
      return true
    }
    if ((!l && r) || (!r && l)) {
      return false
    } else if (l.val !== r.val) {
      return false
    }
    return check(l.left, r.right) && check(l.right, r.left)
  }
  return check(root, root)
};
//leetcode submit region end(Prohibit modification and deletion)
