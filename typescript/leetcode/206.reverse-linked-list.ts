/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
function reverseList(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) {
        return head;
    }
    let last: ListNode = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};
// @lc code=end
