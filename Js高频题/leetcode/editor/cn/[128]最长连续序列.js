//<p>给定一个未排序的整数数组 <code>nums</code> ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。</p>
//
//<p>请你设计并实现时间复杂度为 <code>O(n)</code><em> </em>的算法解决此问题。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [100,4,200,1,3,2]
//<strong>输出：</strong>4
//<strong>解释：</strong>最长数字连续序列是 <code>[1, 2, 3, 4]。它的长度为 4。</code></pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [0,3,7,2,5,8,4,6,0,1]
//<strong>输出：</strong>9
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>0 <= nums.length <= 10<sup>5</sup></code></li>
//	<li><code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>并查集</li><li>数组</li><li>哈希表</li></div></div><br><div><li>👍 1138</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  //set去重，防止出现重复计算的状况导致复杂度超过n
  const set = new Set([...nums])
  let max = 0
  //遍历一遍数组
  for(let a of nums){
    //如果有a-1则代表已经计算过这一组数了
    if(!set.has(a - 1)){
      let count = 1
      let cur = a
      while (set.has(cur+1)){
        cur++
        count++
      }
      max = Math.max(max,count)
    }
  }
  return max
};

var longestConsecutive1 = function(nums) {
  if (nums.length === 0) return 0;
  const map = {};
  let min = 0;
  //把数组里所有数都转为大于等于0的，并用map表储存
  for (let i = 0; i < nums.length; i++) if (nums[i] < min) min = nums[i];
  for (let i = 0; i < nums.length; i++) {
    nums[i] += -min;
    map[nums[i]] = 0;
  }
  //js对象中，作为数组索引的key按照升序排序
  console.log(map)
  let max = 1;
  let count = 1;
  let preNum = null;
  for (const key in map) {
    if (preNum === null) {
      preNum = parseInt(key);
      count = 1;
    } else {
      if (key == preNum + 1) {
        count += 1;
        if (count >= max) max = count;
      } else {
        count = 1;
      }
      preNum = parseInt(key);
    }
  }
  return max;
};

longestConsecutive1([100,4,200,1,3,2])
//leetcode submit region end(Prohibit modification and deletion)
