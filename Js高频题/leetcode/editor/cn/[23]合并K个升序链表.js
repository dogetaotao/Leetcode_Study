//<p>给你一个链表数组，每个链表都已经按升序排列。</p>
//
//<p>请你将所有链表合并到一个升序链表中，返回合并后的链表。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre><strong>输入：</strong>lists = [[1,4,5],[1,3,4],[2,6]]
//<strong>输出：</strong>[1,1,2,3,4,4,5,6]
//<strong>解释：</strong>链表数组如下：
//[
//  1-&gt;4-&gt;5,
//  1-&gt;3-&gt;4,
//  2-&gt;6
//]
//将它们合并到一个有序链表中得到。
//1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre><strong>输入：</strong>lists = []
//<strong>输出：</strong>[]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre><strong>输入：</strong>lists = [[]]
//<strong>输出：</strong>[]
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>k == lists.length</code></li>
//	<li><code>0 &lt;= k &lt;= 10^4</code></li>
//	<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>
//	<li><code>-10^4 &lt;= lists[i][j] &lt;= 10^4</code></li>
//	<li><code>lists[i]</code> 按 <strong>升序</strong> 排列</li>
//	<li><code>lists[i].length</code> 的总和不超过 <code>10^4</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>链表</li><li>分治</li><li>堆（优先队列）</li><li>归并排序</li></div></div><br><div><li>👍 1674</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


var mergeTwoList = function (list1,list2){
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
}



var mergeKLists= function(lists) {
  let ans = null
  for (let i = 0; i < lists.length; i++) {
    ans = mergeTwoList(ans,lists[i])
  }
  return ans
};
//leetcode submit region end(Prohibit modification and deletion)

//方法1：
var mergeKLists1 = function(lists) {
  //建成一个
  const list = []
  for (let i = 0; i < lists.length; i++) {
    let node = lists[i]
    while (node){
      list.push(node.val)
      node = node.next
    }
  }
  list.sort((a,b) => a-b)
  const res = new ListNode()
  let now = res
  for (let i = 0; i < list.length; i++) {
    now.next = new ListNode(list[i])
    now = now.next
  }
  return res.next
};

var mergeKLists11 = function(lists) {
  //方法1的巧妙编码方式，redcue将所有链表元素放入一个数组里面，利用reduceRight函数完成从右往左遍历，并处理链表元素
  return lists.reduce((p,n) =>{
    while (n){
      p.push(n)
      n = n.next
    }
    return p
  },[]).sort((a,b) => a.val - b.val)
    .reduceRight((p, n)=>(n.next = p, p = n,p),null)
};

//方法2：使用小根堆的优先队列方法：js没有小根堆内置api，只能自己手写
var mergeKLists2 = function(lists) {
  const res = new ListNode(0);
  let p = res;
  const h = new MinHeap();
  //先把所有头节点放入小根堆
  lists.forEach(l => {
    if(l) h.insert(l);
  })
  //弹出最小头节点，并且如果有此头节点有next，把其next再次放入小根堆，重新弹出头节点
  while(h.size()) {
    const n = h.pop();
    p.next = n;
    p = p.next;
    if(n.next) h.insert(n.next);
  }
  return res.next;
};

//定义小根堆和各种方法
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 交换节点
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  // 获取父节点
  getParentIndex(i) {
    // return Math.floor((i - 1) / 2);
    return (i - 1) >> 1; // 2进制操作，取商
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  // 上移
  shiftUp(index) {
    if (index == 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) { // 父节点大于当前节点
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  // 下移操作
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  // 将值插入堆的底部，即数组的尾部。
  // 然后_上移:将这个值和它的父节点进行交换，直到父节点小于等于这个插入的值
  // 大小为k的堆中插入元素的时间复杂度为O(logK)
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  // 删除堆顶
  // 用数组尾部元素替换堆顶(直接删除堆顶会破坏堆结构)。
  // 然后下移:将新堆顶和它的子节点进行交换，直到子节点大于等于这个新堆顶。
  // 大小为k的堆中删除堆顶的时间复杂度为O(logK)。
  pop() {
    if (this.size() === 1) return this.heap.shift();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return top;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}