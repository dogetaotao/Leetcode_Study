//<p>给你一个整数数组 <code>nums</code> ，数组中的元素 <strong>互不相同</strong> 。返回该数组所有可能的子集（幂集）。</p>
//
//<p>解集 <strong>不能</strong> 包含重复的子集。你可以按 <strong>任意顺序</strong> 返回解集。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1,2,3]
//<strong>输出：</strong>[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [0]
//<strong>输出：</strong>[[],[0]]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= nums.length <= 10</code></li>
//	<li><code>-10 <= nums[i] <= 10</code></li>
//	<li><code>nums</code> 中的所有元素 <strong>互不相同</strong></li>
//</ul>
//<div><div>Related Topics</div><div><li>位运算</li><li>数组</li><li>回溯</li></div></div><br><div><li>👍 1463</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//位运算+字典
var subsets = function (nums) {
  const ans = []
  const n = nums.length
  for (let i = 0; i < (1 << n); i++) {
    const t = []
    for (let c = 0; c < n; c++) {
      if (i & (1 << c)) {
        t.push(nums[c])
      }
    }
    ans.push(t)
  }
  return ans
};
//回溯算法改进的递归写法
var subsets1 = function (nums) {
  const t = []
  const ans = []
  const n = nums.length
  const dfs = (cur) => {
    if (cur === n) {
      ans.push(t.slice())
      return
    }
    t.push(nums[cur])
    dfs(cur + 1)
    t.pop()
    dfs(cur + 1)
  }
  dfs(0)
  return ans
};
//回溯算法常规写法，回溯算法的通用套路
// 就是在递归之前做选择，在递归结束之后撤销刚才的选择
var subsets2 = function (nums) {
  const ans = []
  const dfs = (index, list) =>{
    //将结果加入解集
    ans.push(list.slice())
    for (let i = index; i < nums.length; i++){
      // 枚举出所有可选的数
      list.push(nums[i])
      //基于这个数继续递归
      dfs(i+1,list)
      //撤销选这个数
      list.pop()
    }
  }
  dfs(0,[])
  return ans
};
subsets1([1,2,3])
//leetcode submit region end(Prohibit modification and deletion)
