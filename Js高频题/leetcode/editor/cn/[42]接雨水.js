//<p>给定&nbsp;<code>n</code> 个非负整数表示每个宽度为 <code>1</code> 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png" style="height: 161px; width: 412px;" /></p>
//
//<pre>
//<strong>输入：</strong>height = [0,1,0,2,1,0,1,3,2,1,2,1]
//<strong>输出：</strong>6
//<strong>解释：</strong>上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>height = [4,2,0,3,2,5]
//<strong>输出：</strong>9
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>n == height.length</code></li>
//	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
//	<li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>栈</li><li>数组</li><li>双指针</li><li>动态规划</li><li>单调栈</li></div></div><br><div><li>👍 2987</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
//利用单调栈
var trap = function (height) {
  let ans = 0
  //创建一个栈，用来储存下标
  const stack = []
  const n = height.length
  for (let i = 0; i < n; i++) {
    //如果栈不是空的且height[i]比下标为以栈中待弹出元素为下标的height值大时
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      //弹出栈顶元素
      const top = stack.pop()
      //如果栈空了，直接break
      if (!stack.length) {
        break
      }
      //栈内第一个元素作为计算左下标的依据，栈中弹出元素作为计算水深的依据之一
      //算出要计算的水的左下标
      const left = stack[stack.length - 1]
      //算出要计算水的宽度
      const currWidth = i - left - 1
      //算出要计算的水的深度
      const currHeight = Math.min(height[left], height[i]) - height[top]
      ans += currWidth * currHeight
    }
    stack.push(i)
  }
  return ans
};
//leetcode submit region end(Prohibit modification and deletion)
var trap1 = function (height) {

  const n = height.length
  if (n === 0) {
    return 0
  }

  const leftMax = new Array(n).fill(0)
  leftMax[0] = height[0]
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }

  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }

  let ans = 0
  for (let i = 0; i < n; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return ans
};