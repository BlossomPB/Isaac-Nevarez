function runTimer(x){


alert("Working JS File");

//displays time
currTime = 50;
//time between delay for countdown
var timeout = 1000;
//for loop function for runTimer
for (i = 0; i < 11; i++) {
    setTimeout(function(){
        //when time 0 it displays blastoff
        if(currTime == 0){ 
            x.innerHTML = "Blastoff !!";
        }
        //when time is 25 this else if displays halfway point and currTime
        else if (currTime <25){
            x.innerHTML = "Warning Less than halfway to launch TimeLeft="+currTime 
        }
        // if everything else doesn't fit with the code above this is ran
        else {
            x.innerHTML = currTime
        }
        currTime = currTime - 5;
        }, timeout);
        timeout = timeout + 500;
}

}



    // Dice Game (crops)
    function play() {
        var die1 =Math.ceil(Math.random()*6);
        
        var die2 =Math.ceil(Math.random()*6);
        
        var sum = die1+die2
        
        
        document.write("Die 1 = " + die1) 
        document.write("<br/>") 
        document.write("Die 2 = " + die2) 
        document.write("<br/>") 
        document.write("Sum = " + sum)
        document.write("<br/>") 
        if (sum == 7 || sum == 11) 
        { 
        
        document.write("CRAPS - you lose") 
        document.write("<br/>") 
        }
        else if (die1== die2 && die1%2 == 0)
        {
        document.write("DOUBLES - you win") 
        document.write("<br/>") 
        }
        
        }
        
        
        //and in the HTML
        function startButtonClick(){

        }
        function stopButtonClick(){
            
        }