//<p>实现&nbsp;<a href="https://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(<em>x</em>, <em>n</em>)</a>&nbsp;，即计算 <code>x</code> 的 <code>n</code> 次幂函数（即，<code>x<sup>n</sup></code><sup><span style="font-size:10.8333px"> </span></sup>）。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>x = 2.00000, n = 10
//<strong>输出：</strong>1024.00000
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>x = 2.10000, n = 3
//<strong>输出：</strong>9.26100
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>x = 2.00000, n = -2
//<strong>输出：</strong>0.25000
//<strong>解释：</strong>2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>-100.0 &lt; x &lt; 100.0</code></li>
//	<li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup>-1</code></li>
//	<li><code>-10<sup>4</sup> &lt;= x<sup>n</sup> &lt;= 10<sup>4</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>递归</li><li>数学</li></div></div><br><div><li>👍 839</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

  //把x的n次方，转变为[x^(n/2)]^2 === (xx)^(n/2)
  // 考虑n为奇数和偶数的情况：[x^(n/2)]^2x 亦或者 先将n-1操作 x*x^(n-1)
  // 转换过程：x^n -> x^(n/2) -> x^(n/4) -> ... -> x^1===x or x^0 ===0
  if (n < 0) return 1 / myPow(x, -n);
  if (n === 0) return 1; // 设置递归的出口
  //如果n为奇数
  if (n % 2) return x * myPow(x, n - 1);
  //如果n为偶数
  return myPow(x * x, n / 2);


};


//leetcode submit region end(Prohibit modification and deletion)
