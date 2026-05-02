class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;

        let countZeros = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) product *= nums[i];
            else countZeros++;
        }

        if (countZeros > 1) return Array(nums.length).fill(0);

        let output = [];

        for (let i = 0; i < nums.length; i++) {
            if (countZeros > 0) {
                output[i] = nums[i] === 0 ? product : 0;
            } else {
                output[i] = product / nums[i];
            }
        }
        return output;
    }
}
