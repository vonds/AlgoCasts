const maxSubArray = (nums) => {
    let curr_max = 0, max_so_far = 0;

    for (var i = 0; i < nums.length; i++) {
        curr_max = Math.max(0, curr_max + nums[i]);
        max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
};