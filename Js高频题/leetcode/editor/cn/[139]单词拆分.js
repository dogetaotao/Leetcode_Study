//<p>给你一个字符串 <code>s</code> 和一个字符串列表 <code>wordDict</code> 作为字典。请你判断是否可以利用字典中出现的单词拼接出 <code>s</code> 。</p>
//
//<p><strong>注意：</strong>不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入:</strong> s = "leetcode", wordDict = ["leet", "code"]
//<strong>输出:</strong> true
//<strong>解释:</strong> 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入:</strong> s = "applepenapple", wordDict = ["apple", "pen"]
//<strong>输出:</strong> true
//<strong>解释:</strong> 返回 true 因为 <code>"</code>applepenapple<code>"</code> 可以由 <code>"</code>apple" "pen" "apple<code>" 拼接成</code>。
//&nbsp;    注意，你可以重复使用字典中的单词。
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入:</strong> s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
//<strong>输出:</strong> false
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= s.length &lt;= 300</code></li>
//	<li><code>1 &lt;= wordDict.length &lt;= 1000</code></li>
//	<li><code>1 &lt;= wordDict[i].length &lt;= 20</code></li>
//	<li><code>s</code> 和 <code>wordDict[i]</code> 仅有小写英文字母组成</li>
//	<li><code>wordDict</code> 中的所有字符串 <strong>互不相同</strong></li>
//</ul>
//<div><div>Related Topics</div><div><li>字典树</li><li>记忆化搜索</li><li>哈希表</li><li>字符串</li><li>动态规划</li></div></div><br><div><li>👍 1448</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//dfs+记忆法
var wordBreak = function (s, wordDict) {
  const len = s.length
  const wordSet = new Set(wordDict)
  const memo = new Array(len)

  const canBreak = (start) => {//判断start到末尾的字串能否break
    if (start === len) return true//指针越界，此时没有剩余字符，只有一步步划分为单词了才能走到这一步才能走到这一步，返回真
    if (memo[start] !== undefined) return memo[start]
    for (let i = start + 1; i <= len; i++) {
      const prefix = s.slice(start, i)
      if (wordSet.has(prefix) && canBreak(i)) {
        memo[start] = true
        return true
      }
    }
    memo[start] = false
    return false
  }
  return canBreak(0)
};

//bfs+记忆法
var wordBreak1 = function (s, wordDict) {
  const wordSet = new Set(wordDict)
  const len = s.length
  const visited = []

  let queue = []
  queue.push(0)
  while (queue.length) {
    const start = queue.shift()
    if (visited[start]) continue
    visited[start] = true

    for (let i = start + 1; i < len + 1; i++) {
      const prefix = s.slice(start, i)
      if (wordSet.has(prefix)) {
        if (i < len) {
          queue.push(i)
        } else {
          return true
        }
      }
    }
  }
  return false
}
//dp法
var wordBreak2 = (s, wordDict) => {
  const wordSet = new Set(wordDict)
  const len = s.length
  const dp = new Array(len + 1).fill(false)
  dp[0] = true

  for (let i = 1; i<=len; i++){
    for (let j = i - 1; j >= 0; j--) {
      const suffix = s.slice(j , i)
      if(wordSet.has(suffix) && dp[j]){
        dp[i] = true
        break
      }
    }
  }
  return dp[len]
}


//leetcode submit region end(Prohibit modification and deletion)
