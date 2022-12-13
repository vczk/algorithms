/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
function middleNode(head: ListNode | null): ListNode | null {
    let fast: ListNode = head;
    let slow: ListNode = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
// @lc code=end
