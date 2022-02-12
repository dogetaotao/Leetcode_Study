//<p>给你一个二叉树的根节点 <code>root</code> ，判断其是否是一个有效的二叉搜索树。</p>
//
//<p><strong>有效</strong> 二叉搜索树定义如下：</p>
//
//<ul>
//	<li>节点的左子树只包含<strong> 小于 </strong>当前节点的数。</li>
//	<li>节点的右子树只包含 <strong>大于</strong> 当前节点的数。</li>
//	<li>所有左子树和右子树自身必须也是二叉搜索树。</li>
//</ul>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" style="width: 302px; height: 182px;" />
//<pre>
//<strong>输入：</strong>root = [2,1,3]
//<strong>输出：</strong>true
//</pre>
//
//<p><strong>示例 2：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" style="width: 422px; height: 292px;" />
//<pre>
//<strong>输入：</strong>root = [5,1,4,null,null,3,6]
//<strong>输出：</strong>false
//<strong>解释：</strong>根节点的值是 5 ，但是右子节点的值是 4 。
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>树中节点数目范围在<code>[1, 10<sup>4</sup>]</code> 内</li>
//	<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>深度优先搜索</li><li>二叉搜索树</li><li>二叉树</li></div></div><br><div><li>👍 1407</li><li>👎 0</li></div>

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

//递归方法
var isValidBST = function (root) {
  //r为当前节点，lower为当前节点最小下限，higher为最高上限
  const helper = (r, lower, higher) => {
    if (r === null) {
      return true
    }
    if (r.val <= lower || r.val >= higher) {
      return false
    }
    //一个节点左节点下限为无穷小，上限为此节点的val；右节点同理
    return helper(r.left, lower, r.val) && helper(r.right, r.val, higher)
  }
  //最初节点上下限为正负无穷
  return helper(root, -Infinity, Infinity)
};

//中序遍历：搜索二叉树中序遍历结果必定是升序的数组
var isValidBST2 = function (root) {
  let stack = []
  let inOrder = -Infinity
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    //如果中序遍历过程中，先出来的大于了后出来的
    if (root.val <= inOrder) {
      return false
    }
    inOrder = root.val
    root = root.right
  }
  return true
}

var isValidBST1 = function (root) {
  let lowest = -Infinity
  const fun = (p) => {
    if (p === null) {
      return true
    }
    let l = fun(p.left)
    if (p.val < lowest) return false
    lowest = p.val
    let r = fun(p.right)
    return l && r
  }
  return fun(root)
}
//leetcode submit region end(Prohibit modification and deletion)
