//<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 </p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;" />
//<pre>
//<strong>输入：</strong>l1 = [1,2,4], l2 = [1,3,4]
//<strong>输出：</strong>[1,1,2,3,4,4]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>l1 = [], l2 = []
//<strong>输出：</strong>[]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>l1 = [], l2 = [0]
//<strong>输出：</strong>[0]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>两个链表的节点数目范围是 <code>[0, 50]</code></li>
//	<li><code>-100 <= Node.val <= 100</code></li>
//	<li><code>l1</code> 和 <code>l2</code> 均按 <strong>非递减顺序</strong> 排列</li>
//</ul>
//<div><div>Related Topics</div><div><li>递归</li><li>链表</li></div></div><br><div><li>👍 2125</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //终止条件：当两个链表都为空时
  if (list1 === null || list2 === null) {
    return list2 === null ? list1 : list2
  }
  //较小的头节点指向其余节点的合并结果
  // https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/yi-kan-jiu-hui-yi-xie-jiu-fei-xiang-jie-di-gui-by-/
  if(list1.val<list2.val){
    list1.next = mergeTwoLists(list1.next,list2)
    return list1
  }else{
    list2.next = mergeTwoLists(list1,list2.next)
    return list2
  }
};
//leetcode submit region end(Prohibit modification and deletion)
var mergeTwoLists1 = function (list1, list2) {
  //终止条件：当两个链表都为空时

  const dummyHead = new ListNode(0)
  let cur = dummyHead

  while (list1 !== null && list2 !== null){
    if(list1.val < list2.val){
      cur.next = list1
      cur = cur.next
      list1 = list1.next
    } else{
      cur.next = list2
      cur = cur.next
      list2 = list2.next
    }
  }

  if (list1 === null || list2 === null) {
    cur.next =  list2 === null ? list1 : list2
  }
  return dummyHead.next
};