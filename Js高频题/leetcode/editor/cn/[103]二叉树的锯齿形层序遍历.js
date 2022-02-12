//<p>给你二叉树的根节点 <code>root</code> ，返回其节点值的 <strong>锯齿形层序遍历</strong> 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg" style="width: 277px; height: 302px;" />
//<pre>
//<strong>输入：</strong>root = [3,9,20,null,null,15,7]
//<strong>输出：</strong>[[3],[20,9],[15,7]]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>root = [1]
//<strong>输出：</strong>[[1]]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>root = []
//<strong>输出：</strong>[]
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>树中节点数目在范围 <code>[0, 2000]</code> 内</li>
//	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>广度优先搜索</li><li>二叉树</li></div></div><br><div><li>👍 591</li><li>👎 0</li></div>

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(!root){
    return []
  }
  const list = []
  const ans = []
  list.push(root)
  let bool = true
  while(list.length !== 0){
    const currentDeep = list.length
    ans.push([])
    for (let i = 0; i < currentDeep; i++) {
      const cur = list.shift()
      if(!bool){
        ans[ans.length-1].push(cur.val)
        if(cur.right) list.push(cur.right)
        if(cur.left) list.push(cur.left)
      } else {
        //添加元素到数组开头
        ans[ans.length-1].unshift(cur.val)
        if(cur.right) list.push(cur.right)
        if(cur.left) list.push(cur.left)
      }
    }
    bool = !bool
  }
  return ans
};
//leetcode submit region end(Prohibit modification and deletion)
