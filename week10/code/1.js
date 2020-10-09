
// 对象数组排序
const sort = (arr,k1,k2,k3)=>{
    const merge = (left,right)=>{
        let result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0][k1] > right[0][k1]) {
                result.push(left.shift());
            } else if(left[0][k1] == right[0][k1]){
                if(left[0][k2] > right[0][k2]){
                    result.push(left.shift());
                }else if(left[0][k2] == right[0][k2]){
                    if(left[0][k3] > right[0][k3]){
                        result.push(left.shift());
                    }else{
                        result.push(right.shift());
                    }
                }else{
                    result.push(right.shift());
                }
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

const arr = [{a:13,b:3,c:11},{a:13,b:4,c:10},{a:13,b:3,c:10}]
console.log(sort(arr,'a','b','c'));
