//<p>给定两个整数数组&nbsp;<code>preorder</code> 和 <code>inorder</code>&nbsp;，其中&nbsp;<code>preorder</code> 是二叉树的<strong>先序遍历</strong>， <code>inorder</code>&nbsp;是同一棵树的<strong>中序遍历</strong>，请构造二叉树并返回其根节点。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1:</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" style="height: 302px; width: 277px;" />
//<pre>
//<strong>输入</strong><strong>:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
//<strong>输出:</strong> [3,9,20,null,null,15,7]
//</pre>
//
//<p><strong>示例 2:</strong></p>
//
//<pre>
//<strong>输入:</strong> preorder = [-1], inorder = [-1]
//<strong>输出:</strong> [-1]
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示:</strong></p>
//
//<ul>
//	<li><code>1 &lt;= preorder.length &lt;= 3000</code></li>
//	<li><code>inorder.length == preorder.length</code></li>
//	<li><code>-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</code></li>
//	<li><code>preorder</code>&nbsp;和&nbsp;<code>inorder</code>&nbsp;均 <strong>无重复</strong> 元素</li>
//	<li><code>inorder</code>&nbsp;均出现在&nbsp;<code>preorder</code></li>
//	<li><code>preorder</code>&nbsp;<strong>保证</strong> 为二叉树的前序遍历序列</li>
//	<li><code>inorder</code>&nbsp;<strong>保证</strong> 为二叉树的中序遍历序列</li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>数组</li><li>哈希表</li><li>分治</li><li>二叉树</li></div></div><br><div><li>👍 1417</li><li>👎 0</li></div>

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//迭代法
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null
  const stack = []
  let inorderIndex = 0
  const root = new TreeNode(preorder[0])
  stack.push(root)
  for (let i = 1; i < preorder.length; i++) {
    let peek = stack[stack.length - 1]
    let cur = new TreeNode(preorder[i])
    //如果头节点没有左支，则inorder[inorderIndex]应该等于头节点的值，
    //此时不相等证明肯定有左支，此时cur肯定为头节点左孩子
    if (inorder[inorderIndex] !== peek.val) {
      peek.left = cur
    }
    //头节点没有左支时，寻找到有右节点的父节点，把cur赋给其右节点，弹出多余的节点
    else {
      let fatherNode
      while (stack.length && stack[stack.length - 1].val === inorder[inorderIndex]) {
        inorderIndex++
        fatherNode = stack.pop()
      }
      fatherNode.right = cur
    }
    stack.push(cur)
  }
  return root
};

//递归
var buildTree1 = function (preorder, inorder) {
  if (preorder.length === 0) return null
  let preorderRoot = new TreeNode(preorder[0])
  let mid = inorder.findIndex((number) => number === preorderRoot.val)
  preorderRoot.left = buildTree1(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  preorderRoot.right = buildTree1(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length))
  return preorderRoot
};
//利用哈希表的更快速的递归
var buildTree2 = function(preorder, inorder) {
  let m = new Map()
  for(let i=0;i<inorder.length;i++){
    m.set(inorder[i],i)
  }
  const buildTree = (preStart,preEnd,inStart,inEnd)=>{
    if(preStart>preEnd || inStart > inEnd) return null
    let newVal = preorder[preStart]
    let newNode = new TreeNode(newVal)
    let index = m.get(newVal)
    let leftCount = index - inStart
    newNode.left = buildTree(preStart+1,preStart+leftCount,inStart,index-1)
    newNode.right = buildTree(preStart+leftCount+1,preEnd,index+1,inEnd)
    return newNode
  }
  return buildTree(0,preorder.length-1,0,inorder.length-1)
};


//leetcode submit region end(Prohibit modification and deletion)
