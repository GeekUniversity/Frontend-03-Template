const sort = (arr,k1)=>{

   const merge = (left,right)=>{
        let result = [];
        
        while (left.length > 0 && right.length > 0) {
            if (left[0] >= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
    
        while (left.length) result.push(left.shift());
        while (right.length) result.push(right.shift());
    
        return result;
   }
   const  mergesort = (seq)=>{
        let len = seq.length;
        if (len < 2) return seq;
        let mid = Math.floor(len / 2);
        let left = seq.slice(0, mid);
        let right = seq.slice(mid);
    
        return merge(mergesort(left), mergesort(right));
    }
    return mergesort(arr)
}
   
   
   
   

   
    

let seq = [5,3,0,6,1,4]

let result = sort(seq)

console.log(result);
// const arr = [{a:12,b:3,c:11},{a:15,b:2,c:10},{a:13,b:3,c:10}]
// console.log('aaa');
// console.log(sort2(arr,'a'));
