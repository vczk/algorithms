/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy: ListNode = new ListNode();
    dummy.next = head;
    let prev = getNthFromEnd(dummy, n + 1);
    prev.next = prev.next.next;
    return dummy.next;
};

function getNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let a: ListNode = head;
    for (let i = 0; i < n; i++) {
        a = a.next;
    }
    let b: ListNode = head;
    while (a != null) {
        a = a.next;
        b = b.next;
    }
    return b;
}
// @lc code=end
