$(document).ready(function(){
    $('#start').click(function(){
        var lost = false;
        var score=0;
        var blips = {};
        while(!lost){
            var numOfBlips = score + 1;
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
                            blips.push('topleft');
                         break;
                     case 2:
                         $("#topLeft").animate({
                                color:"##3333FF"
                            }, 500);
                            $("#topLeft").animate({
                                color:"#blue"
                            }, 500);
                            blips.push('topright');
                         break;
                     case 3:
                         $("#topLeft").animate({
                                color:"#FFFF66"
                            }, 500);
                            $("#topLeft").animate({
                                color:"#yellow"
                            }, 500);
                            blips.push('bottomleft');
                         break;
                     case 4:
                         $("#topLeft").animate({
                                color:"#66C266"
                            }, 500);
                            $("#topLeft").animate({
                                color:"green"
                            }, 500);
                            blips.push('bottomright');
                         break;
                     default:
                     break;
                 }
             }
             
             var finished = false; 
             var counter = 1;
             while(!finished){
                 $(".button").click(function(){
                     if($(this)===$('#topLeft') && blips[counter]==="topleft"){
                         counter++;
                         if(counter === blips.length){
                             finished=true;
                             score++;
                         }
                     }else if($(this)===$('#topRight') && blips[counter]==='topright'){
                         counter++;
                         if(counter === blips.length){
                             finished=true;
                             score++;
                         }
                     }else if($(this)===$('#bottomLeft') && blips[counter]==='bottomleft'){
                         counter++;
                         if(counter === blips.length){
                             finished=true;
                             score++;
                         }
                     }else if($(this)===$('#bottomRight') && blips[counter]==='bottomright'){
                         counter++;
                         if(counter === blips.length){
                             finished=true;
                             score++;
                         }
                     }else{
                         finished=true;
                         lost=true;
                     }
                 });
             }
             
             $('#score').html(score.toString());
        }
    });
});







