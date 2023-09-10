var removeDuplicates = function(nums) {
    let size= nums.length
    for ( let i = 0 ;i<nums.length-1; i++){
        for ( let j=i+1 ; j<nums.length;j++){
            if(nums[i]===nums[j]){
            nums[j]=nums[j+1]
            size--
        }
    }
}
        
    return size,nums
};

console.log(removeDuplicates([1,1,2,2,3,3]))