/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let list: ListNode = new ListNode();
    let curr: ListNode = list;

    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    if (list1 != null && list2 == null) {
        curr.next = list1;
    }
    if (list1 == null && list2 != null) {
        curr.next = list2;
    }

    return list.next;
};
// @lc code=end
