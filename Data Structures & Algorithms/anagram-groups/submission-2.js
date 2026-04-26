class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let s of strs) {
            // sort string to make the keys
            let sorted = s.split("").sort().join("");

            // create new group if not exist
            if (!map.has(sorted)) {
                map.set(sorted, []);
            }

            // add original string to group
            map.get(sorted).push(s);
        }

        // return all grouped anagrams
        return [...map.values()];
    }
}
