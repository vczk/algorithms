/*
 * @lc app=leetcode id=86 lang=typescript
 *
 * [86] Partition List
 */

// @lc code=start
function partition(head: ListNode | null, x: number): ListNode | null {

    let list1: ListNode = new ListNode();
    let l1 = list1;
    let list2: ListNode = new ListNode();
    let l2 = list2;

    while (head != null) {
        if (head.val < x) {
            l1.next = head;
            l1 = l1.next;
        } else {
            l2.next = head;
            l2 = l2.next;
        }
        let next = head.next;
        head.next = null;
        head = next;
    }

    l1.next = list2.next;
    return list1.next;
};
// @lc code=end
