//<p>给你一个字符串 <code>s</code>，找到 <code>s</code> 中最长的回文子串。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "babad"
//<strong>输出：</strong>"bab"
//<strong>解释：</strong>"aba" 同样是符合题意的答案。
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "cbbd"
//<strong>输出：</strong>"bb"
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "a"
//<strong>输出：</strong>"a"
//</pre>
//
//<p><strong>示例 4：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "ac"
//<strong>输出：</strong>"a"
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= s.length <= 1000</code></li>
//	<li><code>s</code> 仅由数字和英文字母（大写和/或小写）组成</li>
//</ul>
//<div><div>Related Topics</div><div><li>字符串</li><li>动态规划</li></div></div><br><div><li>👍 4522</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  if (s.length === 1) {
    return s
  }
  let ans = ""
  const s1 = [...s]
  let l = 0
  let L = 0 //记录下整个数组最大回文数长度
  const map = new Map() // 记录下数组每一位可形成的最大回文数多长与其对应的index值
  for (let i = 0; i < s1.length; i++) {
    if (i + 1 !== s1.length && s1[i] === s1[i + 1]) {
      let j = 0
      while (((i - j >= 0) && (i + 1 + j < s1.length)) && s1[i - j] === s1[i + 1 + j]) {
        j++
      }
      l = j * 2
      L = Math.max(L, l)
      map.set(l, i)
    }
    if (((i !== 0) && (i + 1 !== s1.length)) && s1[i - 1] === s1[i + 1]) {
      let j = 0
      while (((i - j >= 0) && (i + j < s1.length)) && s1[i - j] === s1[i + j]) {
        j++
      }
      l = 2 * j - 1
      L = Math.max(L, l)
      map.set(l, i)
    }
  }

  const i = map.get(L)
  if (L % 2 === 0) {
    ans = s.slice(i - L / 2 + 1, i + L / 2 + 1) //注意slice函数前闭右开，因此右侧形参加一
  } else {
    ans = s.slice(i - (L - 1) / 2, i + (L - 1) / 2 + 1)
  }
  if (L === 0) {
    ans = s1[0]
  }

  return ans
};


longestPalindrome("ababd")
//leetcode submit region end(Prohibit modification and deletion)
