/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
// A -> B -> C -> D
// A -> C | B -> A
// B -> A -> C -> D
var swapPairs = function(head) {
    if (head === null || head.next === null) return head;
    // 获取第二个节点
    const next = head.next;
    // 将当前第一个节点指向第三个节点（第二节点指向的是第三节点）
    head.next = swapPairs(next.next);
    // 将第二个节点指向第一个节点
    next.next = head;
    return next;
};

var swapPairs2 = function(head) {
    if (!head || !head.next) return head;
    let [fst, snd] = [head, head.next];
    [fst.next, snd.next] = [swapPairs(snd.next), fst];
    return snd;
};
