// Newton's Program
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var from = read.question("Starting From : ")
var upto = read.question("Range upto : ")
var t = utility.primeNumber(from, upto)
sum = "";
for(var i = 0;i<t.length;i++){
 sum = sum+t[i] + " "
}
for(var j=0;j<t.length-1;j++){
    for(var k=j+1;k<t.length;k++){
    utility.anagram1(t[j], t[k])
        
        
    }
}

for(var e = 0;e<t.length;e++){
    let check = utility.palindrome(t[e])
    if(check == true){
        console.log(t[e]);
        
    }
}

    
