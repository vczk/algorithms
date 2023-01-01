/*
 * @lc app=leetcode id=25 lang=java
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {

        if (head == null) {
            return head;
        }

        ListNode next = head;
        for (int i = 0; i < k; i++) {
            if (next == null) {
                return head;
            }
            next = next.next;
        }

        ListNode newHead = reverse(head, next);
        head.next = reverseKGroup(next, k);
        return newHead;
    }

    private ListNode reverse(ListNode head, ListNode tail) {
        if (head == null || head.next == tail) {
            return head;
        }
        ListNode newHead = reverse(head.next, tail);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}
// @lc code=end
