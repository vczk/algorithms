/*
 * @lc app=leetcode id=876 lang=java
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
class Solution {

    public ListNode middleNode(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
}
// @lc code=end
