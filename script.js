$(document).ready(function(){
    var lost = false;
    var score=0;
    var numOfBlips;
         numOfBlips = score + 1;
         for(var i = numOfBlips; i>0;i--){
             var selection = Math.floor(Math.random() * 4) + 1;
             switch(selection){
                 case 1:
                        $("#topLeft").animate({
                            color:"#FF3333"
                        }, 500);
                        $("#topLeft").animate({
                            color:"red"
                        }, 500);
                     break;
                 case 2:
                     $("#topLeft").animate({
                            color:"##3333FF"
                        }, 500);
                        $("#topLeft").animate({
                            color:"#blue"
                        }, 500);
                     break;
                 case 3:
                     $("#topLeft").animate({
                            color:"#FFFF66"
                        }, 500);
                        $("#topLeft").animate({
                            color:"#yellow"
                        }, 500);
                     break;
                 case 4:
                     $("#topLeft").animate({
                            color:"#66C266"
                        }, 500);
                        $("#topLeft").animate({
                            color:"green"
                        }, 500);
                     break;
                 default:
                 break;
             }
         }
});