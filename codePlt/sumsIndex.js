nums = [2, 1, 3, 7, 9]

let twoSum = (nums, target) => {
    for (let i=0; i < nums.length; i++){
        for (let j=i+1; j < nums.length; j++){
            if (nums[i]+nums[j] == target){
                return [nums[i], nums[j]];
            }
        }
    }
}
console.log(twoSum(nums,5));