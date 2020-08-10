
// ### 数组去重
// const  Uniq =(arr = []) => {
//     return arr.reduce((t, v) => t.includes(v) ? t : [...t, v], []);
// }

// console.log(Uniq([1,2,3,3]));

//### 累加数组 例如 [1,2,3,3] 》 [1, 3, 6, 10]

const runningSum = (nums=[]) => {
    
    
    return nums.reduce((t,v,index) =>[...t, v+t[index]] ,[0]).slice(1)

    // return nums.reduce((t,v,index) =>[...t, v+t[index]] ,[0])
    // return nums.reduce((t,v) =>t.length> 0 ? [...t, v+t[t.length-1]] : [v] ,[])
}
// console.log(runningSum([1,2,3,4]));


const maxSubArray =(nums=[]) =>{
    let sum1 =  nums.reduce((t, v) =>t+v,0)
    let flag = true
    while(flag){
        if(nums.length===0){
            flag = false;
            break
        }
        let arr2 = [...[],...nums]
        arr2.shift()
        let sum2 = arr2.reduce((t, v) =>t+v,0)
        let arr3 = [...[],...nums]
        arr3.pop()
        let sum3 = arr3.reduce((t, v) =>t+v,0)
        
        if(sum3>sum1){
            sum1 = sum3
            if(sum3>sum2){
                nums.pop()
            }else{
                nums.shift()
            }
        }else{
            if(sum2>sum1){
                sum1 = sum2
                nums.shift()
            }else{
                nums.pop()
            }
        }
    }
    return sum1
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// const getMostMoney = (nums=[]) => {

//     return 
// }

// const getMostMoney = (List) => {
// 	let mostMoney = 0
    
//     for(let i = List.length; i>0;i--){
//     	mostMoney += List[i]
        
//     }
    
	
// }