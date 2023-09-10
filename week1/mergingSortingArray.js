var merge = function(nums1, m, nums2, n) {
    let sorted = []
    while(nums1.length&&nums2.length){
        let element 
        if(nums1[0]<nums2[0]){
            element = nums1.shift()
        }else{
            element = nums2.shift()
        } 
        if(element !== 0 ){
            sorted.push(element)
        }
    
    }
    if(nums1.length){
        sorted = sorted.concat(nums1)
    }else if(nums2.length){
        sorted = sorted.concat(nums2)
    }

    return sorted
};

function leetMerge(nums1,m,nums2,n){
    let first = m-1
    let second = n-1
    let i = nums1.length-1
    while(second>=0){
        num1value = nums1[first]
        num2value = nums2[second]
        if(num1value>num2value){
            nums1[i]=num1value
            first--
            i--
        }else{
            nums1[i]=num2value
            second--
            i--
        }
    }
    return nums1
}


console.log( leetMerge([1,2,3,0,0,0],3,[2,5,6],3))