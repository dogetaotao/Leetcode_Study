//<p><strong>路径</strong> 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 <strong>至多出现一次</strong> 。该路径<strong> 至少包含一个 </strong>节点，且不一定经过根节点。</p>
//
//<p><strong>路径和</strong> 是路径中各节点值的总和。</p>
//
//<p>给你一个二叉树的根节点 <code>root</code> ，返回其 <strong>最大路径和</strong> 。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" style="width: 322px; height: 182px;" />
//<pre>
//<strong>输入：</strong>root = [1,2,3]
//<strong>输出：</strong>6
//<strong>解释：</strong>最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6</pre>
//
//<p><strong>示例 2：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg" />
//<pre>
//<strong>输入：</strong>root = [-10,9,20,null,null,15,7]
//<strong>输出：</strong>42
//<strong>解释：</strong>最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>树中节点数目范围是 <code>[1, 3 * 10<sup>4</sup>]</code></li>
//	<li><code>-1000 <= Node.val <= 1000</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>深度优先搜索</li><li>动态规划</li><li>二叉树</li></div></div><br><div><li>👍 1453</li><li>👎 0</li></div>

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
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = Number.MIN_SAFE_INTEGER
  const dfs = (root) => {
    if (root === null) {
      return 0
    }
    const left = dfs(root.left)
    const right = dfs(root.right)

    //当前子树的最大路径和
    const innerMaxSum = left + root.val + right
    //挑战最大值
    ans = Math.max(ans, innerMaxSum)

    //当前子树对外提供最大和
    const outputMaxSum = root.val + Math.max(0, left, right)
    //如果子树只能提供负的，直接返回0
    return outputMaxSum < 0 ? 0 : outputMaxSum
  }
  dfs(root)
  return ans
};
//leetcode submit region end(Prohibit modification and deletion)
