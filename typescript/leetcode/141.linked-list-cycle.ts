/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
function hasCycle(head: ListNode | null): boolean {
    let fast: ListNode = head;
    let slow: ListNode = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return true;
        }
    }
    return false;
};
// @lc code=end
