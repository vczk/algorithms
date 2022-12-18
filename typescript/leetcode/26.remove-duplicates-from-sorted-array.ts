/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (nums.length < 2) {
        return nums.length;
    }
    let size: number = 0;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[size] != nums[i]) {
            size++;
            nums[size] = nums[i];
        }
    }
    return size + 1;
};
// @lc code=end
