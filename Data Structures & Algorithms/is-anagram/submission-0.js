class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sorting = (str) => {

            let arr = str.split("").sort().join("");
            console.log(arr);
            return arr;
        }

        if (sorting(s) === sorting(t)) return true;

        return false;
    }
}
