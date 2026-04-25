class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set();

        for (let value of nums) {
            if (seen.has(value)) {
                return true;
            } else {
                seen.add(value);
            }
        }
        return false;
    }
}
