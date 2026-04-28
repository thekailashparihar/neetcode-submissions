class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let value of nums) {
            map.set(value, (map.get(value) || 0) + 1);
        }
        // console.log(map);

        let arr = [...map.entries()].sort((a, b) => b[1] - a[1]);

        // console.log(arr);

        let result = [];

        for (let i = 0; i < k; i++) {
            result.push(arr[i][0]);
        }
        // console.log("result", result);

        return result;
    }
}
