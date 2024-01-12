
var isPalindrome = function(x) {
    let num=x.toString();
    let middle=Math.floor(num.length/2)
    for(let i=0;i<middle;i++){
        if(num[i]!=num[num.length-i-1]){
            return false;
        }
    }
    return true;
};