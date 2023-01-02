/*
 * @lc app=leetcode id=234 lang=java
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode middle = middle(head);
        return compare(head, reverse(middle));
    }

    private ListNode middle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        if (fast != null) {
            slow = slow.next;
        }
        return slow;
    }

    private ListNode reverse(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode newHead = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    private boolean compare(ListNode a, ListNode b) {
        if (a == null && b == null) {
            return true;
        } else if (a != null && b != null) {
            return a.val == b.val && compare(a.next, b.next);
        } else {
            return true;
        }
    }
}
// @lc code=end
