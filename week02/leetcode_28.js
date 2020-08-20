/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     let isFineshed = false
//     let index = 0
//     let k = 0
//     const search = (haystack) =>{
//         for(let c,i of haystack){
//             kmp(needle,c)
//         }
//     }
//     const kmp = (needle,c)=>{
//         for(let c2,ind of needle){
//             if(c===c2){
//                 k = ind
//             }
//         }
//     }
// };


class Stt {
    constructor(haystack, needle){
       this.ind = 0
       this.index = 0
       this.haystack = haystack
       this.needle = needle
       this.isF = false
    }
    kmp(c){
        // console.log(this.ind);
        if(this.ind===this.needle.length-1) this.isF = true
        for(let i = this.ind; i<this.needle.length;i++){
            // console.log( this.ind,c===this.needle.charAt(i));
            if(c===this.needle.charAt(i)){
                this.ind = i+1
                this.search()
                continue
            }
        }
        
    }
    search(){
        while( this.index< this.haystack.length){
            this.index ++;
            this.kmp(this.haystack.charAt(i))
            if(isF) return this.index
        }
        for(let i = this.index; i < this.haystack.length;this.index++){
            console.log(i, this.haystack.charAt(i));
            if(this.isF) return i
            this.kmp(this.haystack.charAt(i))
            return -1
        }
    }
}

let sss = new Stt('abababc','abc')

console.log(sss,sss.search());