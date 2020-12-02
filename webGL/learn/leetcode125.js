var isPalindrome = function(str) {
    let s = str.replace(/[^0-9a-zA-Z]/g,'').toLowerCase()
    console.log('---',s,str);
    let len = s.length-1,ind = 0,flag = true
    
    while(len >= ind){
        console.log(s[len],s[ind]);
        if(s[len]!==s[ind]){
            flag = false
        }
        len-- 
        ind++
    }
    return flag
};


console.log(isPalindrome(",; W;:GlG:;l ;,"));

console.log(isPalindrome('ab ab A'));
