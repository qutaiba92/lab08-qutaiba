//var today = new Date();
'use strict';
alert('anything')
var writeOrder = function (){
    var order;
    order = prompt ("choose food or drink?");
    while (order != "food" && order != "drink")
    {    order = prompt("wrong answer! choose food or drink?");}
var imageSource ="";
if (order === "food"){
    imageSource = 'images/foods.png';
}else if (order === "drink"){
    imageSource = 'images/drinks.jpg';
}
 var numOfImages = prompt("How many meals you want?");
while(numOfImages == '' || isNaN(numOfImages)){
    numOfImages = prompt("wrong answer! How many meals you want?");
}
var imgElement = '<img src="'+imageSource+'"/>';
for (var i=0; i<numOfImages; i+=1){
    document.write(imgElement)
}  
}
writeOrder();


