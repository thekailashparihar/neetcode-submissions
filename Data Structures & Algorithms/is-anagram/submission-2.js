class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        let count = {};

        for (let value of s) {
            count[value] = (count[value] || 0) + 1;
        }
        for (let value of t) {
            if (!count[value]) return false;
            count[value]--;
        }
        return true;
    }
}
