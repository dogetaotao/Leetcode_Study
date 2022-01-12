//<p>给你一个字符串数组，请你将 <strong>字母异位词</strong> 组合在一起。可以按任意顺序返回结果列表。</p>
//
//<p><strong>字母异位词</strong> 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1:</strong></p>
//
//<pre>
//<strong>输入:</strong> strs = <code>["eat", "tea", "tan", "ate", "nat", "bat"]</code>
//<strong>输出: </strong>[["bat"],["nat","tan"],["ate","eat","tea"]]</pre>
//
//<p><strong>示例 2:</strong></p>
//
//<pre>
//<strong>输入:</strong> strs = <code>[""]</code>
//<strong>输出: </strong>[[""]]
//</pre>
//
//<p><strong>示例 3:</strong></p>
//
//<pre>
//<strong>输入:</strong> strs = <code>["a"]</code>
//<strong>输出: </strong>[["a"]]</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= strs.length &lt;= 10<sup>4</sup></code></li>
//	<li><code>0 &lt;= strs[i].length &lt;= 100</code></li>
//	<li><code>strs[i]</code>&nbsp;仅包含小写字母</li>
//</ul>
//<div><div>Related Topics</div><div><li>哈希表</li><li>字符串</li><li>排序</li></div></div><br><div><li>👍 962</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let groups = new Map()
  for(let a of strs){
    //also can use let arr = a.split("")
    let arr = Array.from(a)
    arr.sort()
    let sortedStr = arr.join("")
    if(groups.has(sortedStr)){
      groups.get(sortedStr).push(a)
    } else {
      groups.set(sortedStr,[a])
    }
  }
  let result = []
  for(let a of groups.values()){
    result.push(a)
  }

  return result
};
//leetcode submit region end(Prohibit modification and deletion)

//骚套路：用质数表示每个数，几个质数相乘结果唯一
var groupAnagrams1 = function(strs) {
  let map = {
    'a':2,'b':3,'c':5,'d':7,'e':11,'f':13,'g':17,'h':19,'i':23,'j':29,'k':31,'l':37,'m':41,
    'n':43,'o':47,'p':53,'q':59,'r':61,'s':67,'t':71,'u':73,'v':79,'w':83,'x':89,'y':97,'z':101
  }
  let resMap = {};
  let resList = [];
  for(let str of strs) {
    let m = 1;
    for(let i=0;i<str.length;i++) {
      m*=map[str[i]];
    }
    if(!resMap[m]) {resMap[m]=[];}
    resMap[m].push(str);
  }
  for(let key in resMap) {
    resList.push(resMap[key]);
  }
  return resList;
};