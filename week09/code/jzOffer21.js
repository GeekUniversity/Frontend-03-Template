//https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
var exchange = function(nums) {
    // return nums.reduce((t,v)=>(v%2===0?t.push(v):t.unshift(v),t),[])
    let [i,j] = [0,nums.length-1]
    while(i<j){
        if( !!(nums[i] & 1 )){
            i++
            continue
        }
        if( !(nums[j] & 1 )){
            j--;
            continue
        }
        [nums[i],nums[j]] = [nums[j],nums[i]]
    }
    return nums
 };
 console.log(exchange([1,2,3,4]));
 console.log( !( 9 & 1 ) );