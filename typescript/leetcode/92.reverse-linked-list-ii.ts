/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left == 1) {
        return reverseN(head, right);
    }
    head.next = reverseBetween(head.next, left - 1, right - 1);
    return head;
};

let next: ListNode;

function reverseN(head: ListNode | null, n: number): ListNode | null {
    if (n == 1) {
        next = head.next;
        return head;
    }
    let last: ListNode = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = next;
    return last;
};
// @lc code=end
