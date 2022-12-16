/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let a: ListNode = headA;
    let b: ListNode = headB;
    while (a != b) {
        if (a == null) {
            a = headB;
        } else {
            a = a.next;
        }
        if (b == null) {
            b = headA;
        } else {
            b = b.next;
        }
    }
    return a;
};
// @lc code=end
