"use strict";
const inputs = 'abcdefghijklmnopqrstuvwxyz';
let ans = 'Yes';
// Setを使う
const set = new Set([...inputs]);
if (set.size !== inputs.length) {
    ans = 'No';
}
// 文字コードの数値を使う
const isUniqueChars = (arr) => {
    let exists = Array(128).fill(false);
    for (let i = 0; i < arr.length; ++i) {
        let index = arr.charCodeAt(i);
        if (exists[index]) {
            return false;
        }
        exists[index] = true;
    }
    return true;
};
const result = isUniqueChars(inputs);
if (result)
    ans = 'Yes';
console.log(ans);
//# sourceMappingURL=1.1.js.map