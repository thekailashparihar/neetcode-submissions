class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        if (strs.length === 0) return "";

        let message = "";

        for (let value of strs) message += value.length + "#" + value;

        return message;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        if (str.length === 0) return [];

        let result = [];
        let i = 0;

        while (i < str.length) {

            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.slice(i, j))
            i = j + 1;
            j = i + length;

            result.push(str.slice(i, j));

            i = j;

        }

        return result;
    }
}
