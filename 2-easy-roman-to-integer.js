//in:string / out:number
/*
EX1
Input: s = "III"
Output: 3
Explanation: III = 3.
EX2
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:
EX3
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
var romanToInt = function(s) {
    let res=0;
   const map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
   s.split('').forEach((roman,i)=>{
       if(map[roman]<map[s[i+1]]){
           res-=map[roman];
       }
       else{
           res+=map[roman];
       }
   })
   return res;
};