/*
 * @lc app=leetcode id=26 lang=java
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length < 2) {
            return nums.length;
        }
        int size = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[size] != nums[i]) {
                size++;
                nums[size] = nums[i];
            }
        }
        return size + 1;
    }
}
// @lc code=end
