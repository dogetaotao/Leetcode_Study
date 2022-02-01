//<p>给你一个字符串 <code>s</code> 、一个字符串 <code>t</code> 。返回 <code>s</code> 中涵盖 <code>t</code> 所有字符的最小子串。如果 <code>s</code> 中不存在涵盖 <code>t</code> 所有字符的子串，则返回空字符串 <code>""</code> 。</p>
//
//<p> </p>
//
//<p><strong>注意：</strong></p>
//
//<ul>
//	<li>对于 <code>t</code> 中重复字符，我们寻找的子字符串中该字符数量必须不少于 <code>t</code> 中该字符数量。</li>
//	<li>如果 <code>s</code> 中存在这样的子串，我们保证它是唯一的答案。</li>
//</ul>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "ADOBECODEBANC", t = "ABC"
//<strong>输出：</strong>"BANC"
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "a", t = "a"
//<strong>输出：</strong>"a"
//</pre>
//
//<p><strong>示例 3:</strong></p>
//
//<pre>
//<strong>输入:</strong> s = "a", t = "aa"
//<strong>输出:</strong> ""
//<strong>解释:</strong> t 中两个字符 'a' 均应包含在 s 的子串中，
//因此没有符合条件的子字符串，返回空字符串。</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= s.length, t.length <= 10<sup>5</sup></code></li>
//	<li><code>s</code> 和 <code>t</code> 由英文字母组成</li>
//</ul>
//
//<p> </p>
//<strong>进阶：</strong>你能设计一个在 <code>o(n)</code> 时间内解决此问题的算法吗？<div><div>Related Topics</div><div><li>哈希表</li><li>字符串</li><li>滑动窗口</li></div></div><br><div><li>👍 1608</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//滑动窗口+哈希表
var minWindow = function (s, t) {
  let l = 0
    , r = 0
    , res = ''
  //用一个哈希表来储存所需判断条件
  const map = new Map()
  for (let c of t) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1)
  }
  let mapType = map.size

  while (r<s.length){
    const c = s[r]
    if(map.has(c)){
      map.set(c,map.get(c) - 1)
      if(map.get(c) === 0){
        mapType--
      }
    }
    while(mapType === 0){
      const newRes = s.substring(l,r+1)
      //如果res为''或者res比较大，则让res = newRes
      if(!res || newRes.length < res.length){
        res = newRes
      }
      //判断左指针右移过程是否能保证符合条件
      const d = s[l]
      if(map.has(d)){
        map.set(d, map.get(d)+1)
        if(map.get(d) === 1) mapType++
      }
      l++
    }
    r++
  }
  return res
};

//滑动窗口
var minWindow1 = function (s, t) {
  //创建一个对象，记录所需字母与个数
  let need = {}
  let window = {}
  for (let a of t) {
    need[a] = (need[a] || 0) + 1
  }
  //左右指针
  let left = 0
    , right = 0
    //解决需求字母的个数
    , valid = 0
    //最终开始的位置
    , start = 0
    //初始长度设为很大的数，防止干扰
    , len = Number.MAX_VALUE

  while (right < s.length) {
    //向右滑动右指针
    let c = s[right]
    right++
    //如果遇上需求的字母了，判断是否满足需求个数了
    if (need[c]) {
      window[c] = (window[c] || 0) + 1
      if (window[c] === need[c]) {
        valid++
      }
    }
    //满足全部需求,移动左指针缩小范围
    while (valid === Object.keys(need).length) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      let d = s[left]
      left++
      //如果左指针指向位置是所需字母，判断一下是否能继续移动
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  //如果len还是原长度，证明右指针移到头了还无法满足需求，此时返回""
  return len === Number.MAX_VALUE ? "" : s.substr(start, len)

};
//leetcode submit region end(Prohibit modification and deletion)
