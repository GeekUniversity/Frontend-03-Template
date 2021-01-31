/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (source,pattern)=>{
    return source.indexOf(pattern)
}

console.log(strStr("",""))
console.log(strStr("abc","c"))
console.log(strStr("abc",""))
console.log(strStr("mississippi","issip"))