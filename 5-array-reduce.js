    /**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    return nums.reduce(fn,init);
};

nums=[1,2,3];
fn=function sum(total,curr){ return total+curr;};
init=10;
console.log(reduce(nums,fn,init));//16
