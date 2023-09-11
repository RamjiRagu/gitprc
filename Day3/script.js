//Normal Function
function add(){
    return ("hello")
}
console.log(add());

var arr = [1,2,3,4,5]
function odd(){
    for (var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            console.log(arr[i]);
        }
    }
}
odd(); 

function addi(a,b){
    return (a+b);

}
console.log(addi(30,60));

//Ananymous Function

var mul = function(x,y){
    return (x*y);
}
console.log(mul(40,50));

var arra = [1,2,3,4,5];
function oddi(){
    for (var j=0;j<arra.length;j++){
        if(arra[j]%2==1)
        console.log(arra[j]);
     }
}
oddi(); 
//IIFE 
( function(p,q){
    console.log(p-q);
})(60,30);


//Arrow
var compute = (u,v) => u+v
console.log(compute(7,8));

var com = (w,s) =>{
    var re=5;
    resu=w+s+re;
    return resu;
}
console.log(com(9,8));
// odd Ananymous
var arry=[1,2,3,4,5]
var oddn = function(arry){
    for(var k=0;k<arry.length;k++){
        if(arry[k]%2==1)
        console.log(arry[k]);
    }
}
oddn(arry);

//odd IIFE
var arre=[1,2,3,4,5];
(function(){
    for(var l=0;l<arre.length;l++){
        if(arry[l]%2==1)
        console.log(arre[l]);
    }
})(arre);

//arrow
var arl=[1,2,3,4,5];
var orl = (arl) =>{
    for(var m=0;m<arl.length;m++){
        if(arl[m]%2==1)
        console.log(arl[m]);
}
}
orl(arl);

// b)Convert all the strings to title caps in a string array -- Ananymous function

var barr = ["apple","mango","orange","pineapple"];
var bfun = function(barr){
    for(var n=0;n<barr.length;n++){
         
        console.log(barr[n].charAt(0).toUpperCase()+barr[n].slice(1));
         
    }
}
bfun(barr);

// b)Convert all the strings to title caps in a string array -- IIFE function
var birr = ["apple","mango","orange","pineapple"];
(function(){
    for(var n=0;n<barr.length;n++){
         
        console.log(barr[n].charAt(0).toUpperCase()+barr[n].slice(1));
         
    }
})(birr); 

// c) Sum of all numbers in an array -- Ananymous function
var carr = [1,2,3,4,5];
var sum=0;
var cfun = function(carr){
    for(var o=0;o<carr.length;o++){
        sum = sum+carr[o];
    }
    console.log(sum);
}
cfun(carr);

// c) Sum of all numbers in an array -- IIFE function
var cirr = [1,2,3,4,5]
var csum=0;
(function(){
    for(var p=0;p<cirr.length;p++){
        csum = csum+cirr[p];
    }
    console.log(csum);
})(cirr);

// e) Return all the palindromes in an array -- Ananymous function

var earr = ["appa","amma","mummy","daddy"];
var efun = function(earr){
    for(var q=0;q<earr.length;q++){
        var sparray= earr[q].split('');
        var revarray= sparray.reverse();
        var joinarray= revarray.join('');
        if(earr[q]==joinarray){
            console.log(earr[q]);
        }
    }
}
efun(earr);

// e) Return all the palindromes in an array -- IIFE function
var eirr = ["appa","amma","mummy","daddy"];
(function(){
    for(var r=0;r<eirr.length;r++){
        var speir= eirr[r].split('');
        var reveir= speir.reverse();
        var joineir= reveir.join('');
        if(eirr[r]==joineir){
            console.log(eirr[r]);
        }
    }
})(eirr);

//Convert all the strings to title caps in a string array - Arrow function

var tcarr = ["apple","mango","orange","pineapple"];

var tcf = (tcarr) =>{
    for(var s=0;s<tcarr.length;s++){
         
        console.log(tcarr[s].charAt(0).toUpperCase()+tcarr[s].slice(1));
         
    }
}
tcf(tcarr);

//Sum of all numbers in an array - Arrow function

var smarr = [1,2,3,4,5];
var tots=0
var smf = (smarr) =>{
    for(var t=0;t<smarr.length;t++){
        tots=tots+smarr[t];
    }
    console.log(tots);
}
smf(smarr);

// Return all the palindromes in an array - Arrow function

var parr = ["appa","amma","mummy","daddy"];

var pfun = (parr) =>{
    for(u=0;u<parr.length;u++){
        var sppar = parr[u].split('');
        var revpar = sppar.reverse();
        var joinpar = revpar.join('');
        if(joinpar == parr[u]){
            console.log(parr[u]);
        }
    }
}
pfun(parr);