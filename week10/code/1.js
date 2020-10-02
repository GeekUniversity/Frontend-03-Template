const sort = (arr,k1,k2)=>{
    let res = []
    let [i,j] = [0,arr.length-1]
    while(i<=j){
        if(arr[i][k1]>arr[j][k1]){
            res.unshift(arr[i])
            i++
            continue;
        }else if(arr[i][k1]==arr[j][k1]&&arr[i][k2]>arr[j][k2]){
            res.unshift(arr[i])
            i++ 
            [arr[i],arr[j]]=[arr[j],arr[i]]

            continue;
        }else{
            res.push(arr[j])
            j--;
            [arr[i],arr[j]]=[arr[j],arr[i]]
            continue;
        }
        
    }
    return arr
}

const arr = [{a:12,b:3,c:11},{a:13,b:2,c:10},{a:13,b:3,c:10}]
console.log(sort(arr,'a','b'));
