class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Create a map to store number and its index
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            // find the number to reach target
            let complement = target - nums[i];

            // check the number already exist in map
            if (map.has(complement)) {
                // if yes return both indices
                return [map.get(complement), i];
            }

            // otherwise, store current number with index
            map.set(nums[i], i);
        }
    }
}
