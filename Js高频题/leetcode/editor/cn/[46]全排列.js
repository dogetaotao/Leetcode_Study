//<p>给定一个不含重复数字的数组 <code>nums</code> ，返回其 <strong>所有可能的全排列</strong> 。你可以 <strong>按任意顺序</strong> 返回答案。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1,2,3]
//<strong>输出：</strong>[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [0,1]
//<strong>输出：</strong>[[0,1],[1,0]]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1]
//<strong>输出：</strong>[[1]]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= nums.length <= 6</code></li>
//	<li><code>-10 <= nums[i] <= 10</code></li>
//	<li><code>nums</code> 中的所有整数 <strong>互不相同</strong></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>回溯</li></div></div><br><div><li>👍 1720</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

  const res = [] , path  = []
  backtracking(nums, nums.length, [])
  return res

  function backtracking(n, k, used){
    // 递归出口：当path的长度等于length
    if(path.length === k){
      // 结果集中加入这个path的一份拷贝，然后返回
      res.push(Array.from(path))
      return
    }
    //如果path的长度没达到length，就对输入数组进行遍历
    for (let i = 0; i < k; i++) {
      // 如果之前已经出现过了，直接跳过
      if(used[i]) continue
      // 没出现过的话，就把这个元素加入path，并且标记为已经用过了
      path.push(n[i])
      used[i] = true
      // 进入下一层递归
      backtracking(n,k,used)
      // 撤销选择（把这个元素pop出来，并且把这个元素设为没有用过）
      path.pop()
      used[i] = false
    }
  }
};

permute([1,2,3])
//leetcode submit region end(Prohibit modification and deletion)
