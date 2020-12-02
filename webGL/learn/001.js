let nums1 = [4,6,7,8],nums2 = [3,4,5]
const fn = (nums1,nums2)=>{

    let len1 = nums1.length-1,len2 = nums2.length-1 
    let len = len1+len2+1,leng = len+1;
    let res = 0
    while(len2>=0){
        if(len1<0){
            nums1[len--] = nums2[len2--]
            continue
        }
        nums1[len--]= nums1[len1] >= nums2[len2]?nums1[len1--]:nums2[len2--]
    }
    
    if(leng%2==0){
        let i = leng/2
        res = (nums1[i]+nums1[i-1])/2
       
    }else{
        let i = Math.floor(leng/2) 
        res = nums1[i]
    }
    console.log('aaa',res,nums1);
    return res
}

let res=fn(nums2,nums1)
console.log('a--',res);
