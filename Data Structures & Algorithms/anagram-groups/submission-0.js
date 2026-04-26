class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        
        // create a map to store anagram string 
        let map = {};

        for (let s of strs) {
            let sorted = s.split('').sort().join('');

            if (!map[sorted]){
                map[sorted]=[];
            }
            map[sorted].push(s);
        }
        return Object.values(map);
    }
}
