/*
 * @lc app=leetcode id=86 lang=java
 *
 * [86] Partition List
 */

// @lc code=start
class Solution {

    public ListNode partition(ListNode head, int x) {

        ListNode list1 = new ListNode();
        ListNode l1 = list1;
        ListNode list2 = new ListNode();
        ListNode l2 = list2;

        while (head != null) {
            if (head.val < x) {
                l1.next = head;
                l1 = l1.next;
            } else {
                l2.next = head;
                l2 = l2.next;
            }
            ListNode next = head.next;
            head.next = null;
            head = next;
        }

        l1.next = list2.next;
        return list1.next;
    }
}
// @lc code=end
