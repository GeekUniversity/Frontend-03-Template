let nums1 = [1,2,3],nums2 = [3,4,5],m = 3 , n =2
const fn = (nums1,nums2)=>{
    let len1 = nums1.length-1,len2 = nums2.length-1 
    let len = len1+len2+1
    while(len2>=0){
        
        if(len1<0){
           
            nums1[len--] = nums2[len2--]
            continue
        }
        nums1[len--]= nums1[len1] >= nums2[len2]?nums1[len1--]:nums2[len2--]
    }
    return nums1
}

let res=fn(nums2,nums1)
console.log('a--',res);