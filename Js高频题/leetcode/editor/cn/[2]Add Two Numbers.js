//<p>给你两个 <strong>非空</strong> 的链表，表示两个非负的整数。它们每位数字都是按照 <strong>逆序</strong> 的方式存储的，并且每个节点只能存储 <strong>一位</strong> 数字。</p>
//
//<p>请你将两个数相加，并以相同形式返回一个表示和的链表。</p>
//
//<p>你可以假设除了数字 0 之外，这两个数都不会以 0 开头。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg" style="width: 483px; height: 342px;" />
//<pre>
//<strong>输入：</strong>l1 = [2,4,3], l2 = [5,6,4]
//<strong>输出：</strong>[7,0,8]
//<strong>解释：</strong>342 + 465 = 807.
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>l1 = [0], l2 = [0]
//<strong>输出：</strong>[0]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//<strong>输出：</strong>[8,9,9,9,0,0,0,1]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>每个链表中的节点数在范围 <code>[1, 100]</code> 内</li>
//	<li><code>0 <= Node.val <= 9</code></li>
//	<li>题目数据保证列表表示的数字不含前导零</li>
//</ul>
//<div><div>Related Topics</div><div><li>递归</li><li>链表</li><li>数学</li></div></div><br><div><li>👍 7285</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode()
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let carry = 0 //储存进位的数
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const val = v1 + v2 + carry
    carry = Math.floor(val / 10)
    p3.next = new ListNode(val % 10)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }

  if (carry) {
    p3.next = new ListNode(carry)
  }
  return l3.next
};
//leetcode submit region end(Prohibit modification and deletion)
