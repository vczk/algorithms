/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
function detectCycle(head: ListNode | null): ListNode | null {

    let fast: ListNode = head;
    let slow: ListNode = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            break;
        }
    }

    if (fast == null || fast.next == null) {
        return null;
    }

    fast = head;
    while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};
// @lc code=end
