/*
 * @lc app=leetcode id=19 lang=java
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
class Solution {

    public ListNode removeNthFromEnd(ListNode head, int n) {

        ListNode a = head;
        for (int i = 0; i < n; i++) {
            a = a.next;
        }
        if (a == null) {
            return head.next;
        }

        ListNode b = head;
        while (a.next != null) {
            a = a.next;
            b = b.next;
        }
        b.next = b.next.next;

        return head;
    }
}
// @lc code=end
