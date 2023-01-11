/*
 * @lc app=leetcode id=5 lang=java
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
class Solution {
    public String longestPalindrome(String s) {
        String longest = "";
        for (int i = 0; i < s.length(); i++) {
            String a = palindrome(s, i, i);
            String b = palindrome(s, i, i + 1);
            if (a.length() > longest.length()) {
                longest = a;
            }
            if (b.length() > longest.length()) {
                longest = b;
            }
        }
        return longest;
    }

    private String palindrome(String s, int left, int right) {
        while (left >= 0 && right < s.length()) {
            if (s.charAt(left) == s.charAt(right)) {
                left--;
                right++;
            } else {
                break;
            }
        }
        return s.substring(left + 1, right);
    }
}
// @lc code=end
