//<p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>intervals = [[1,3],[2,6],[8,10],[15,18]]
//<strong>输出：</strong>[[1,6],[8,10],[15,18]]
//<strong>解释：</strong>区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>intervals = [[1,4],[4,5]]
//<strong>输出：</strong>[[1,5]]
//<strong>解释：</strong>区间 [1,4] 和 [4,5] 可被视为重叠区间。</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= intervals.length <= 10<sup>4</sup></code></li>
//	<li><code>intervals[i].length == 2</code></li>
//	<li><code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>排序</li></div></div><br><div><li>👍 1265</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

  const res = [];
  intervals.sort((a,b)=>a[0]-b[0]);
  let left = intervals[0][0];
  let right = intervals[0][1];
  for(const [l,r] of intervals) {
    if(right >= l && r>=right){   //如果后面的左区间小于等于前面的右区间 且 如果后面的右区间大于等于前面的右区间 则更新前面的右区间
      right = r;
    }else if(right < l){     //如果后面的左区间大于前面的右区间 则 把前面的左右区间放入res; 更新前面的左右区间
      res.push([left,right]);
      left = l;
      right = r;
    }
  }
  res.push([left,right]);  //最后一个也放进res;
  return res;

}

var merge1 = function(intervals) {
  if (intervals.length === 1) {
    return intervals
  }
  let ans = []
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] < intervals[i + 1][0]) {
      ans.push(intervals[i])
    } else {
      intervals[i + 1] = [intervals[i][0], (Math.max(intervals[i + 1][1], intervals[i][1]))]
    }
    if (i + 1 === intervals.length - 1) {
      ans.push(intervals[i + 1])
    }
  }

  return ans
};

var merge2 = function (intervals) {

  intervals.sort(compare);
  let min = intervals[0][0];
  let max = intervals[0][1];
  let res = [];
  for(let i = 1;i < intervals.length;i++){
    if(intervals[i][0] <= max){
      max = Math.max(max,intervals[i][1]);
    }
    else{
      res.push([min,max]);
      min = intervals[i][0];
      max = intervals[i][1];
    }
  }
  res.push([min,max]);
  return res;
};

function compare(a,b){
  if(a[0] === b[0]){
    return a[1]-b[1];
  }
  return a[0]-b[0];

}
merge([[1,3],[2,6],[8,10],[15,18]])
merge([[2,3],[4,5],[6,7],[8,9],[1,10]])
//leetcode submit region end(Prohibit modification and deletion)
