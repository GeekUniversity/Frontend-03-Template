function isPalindrome(s: string): boolean {
    const formatS = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()

    const slen = formatS.length
    if (!slen) {
        return true
    }
    let i = 0
    let j = slen - 1
    while(i < j) {
        if (formatS[i++] !== formatS[j--]) {
            return false
        }
    }
    return true
};
