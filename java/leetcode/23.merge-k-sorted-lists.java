import java.util.PriorityQueue;
import java.util.Stack;

/*
 * @lc app=leetcode id=23 lang=java
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
class Solution {

    public ListNode mergeKLists(ListNode[] lists) {

        if (lists.length == 0) {
            return null;
        }

        PriorityQueue<ListNode> queue = new PriorityQueue<>(
                lists.length,
                (a, b) -> a.val - b.val
        );
        for (ListNode list : lists) {
            if (list != null) {
                queue.add(list);
            }
        }

        ListNode list = new ListNode();
        ListNode curr = list;
        while (!queue.isEmpty()) {
            ListNode minVal = queue.poll();
            curr.next = minVal;
            curr = curr.next;
            if (minVal.next != null) {
                queue.add(minVal.next);
                minVal.next = null;
            }
        }

        return list.next;
    }
}
// @lc code=end
