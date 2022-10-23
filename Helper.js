alert("Working JS File");
userName = "[yourUsername] "
badgeNumber = "[yourBadgeID] "
// < = Greater Than       > = Less Than

function getUsername(y){

    do{
        userName = prompt("Please enter your user name");
    if(userName.length > 19){
            alert("Please enter a shorter username please.   Current Length: " + userName.length);
    };

    }while(userName.length > 20);
    alert("Your Name Is " + userName)
    y.innerHTML = userName;
}

function getUserBadgeID(xy){
    do{
            badgeNumber = prompt("Please enter your badge number");
        if(badgeNumber.length > 3){
            alert("Please enter a valid badge number (Less than 3 charaters)");
        };

    }while(badgeNumber.length > 4);
        alert("Your Badge ID Is " + badgeNumber)
        xy.innerHTML = badgeNumber;
}
//Compartment for timer
var interID = new Array();
//displays time
currTime = 50;
//time between delay for countdown
var timeout = 1000;
//for loop function for runTimer
function runTimer(x){
for (i = 0; i < 11; i++) {    //logic error at ">"
    interID[i] = setTimeout(function(){
        //when time 0 it displays blastoff
        if(currTime == 0){ 
            x.innerHTML = "Blastoff !!";
        }
        //when time is 25 this else if displays halfway point and currTime
        else if (currTime < 25){
            x.innerHTML = "Warning Less than halfway to launch TimeLeft= "+currTime 
        }
        // if everything else doesn't fit with the code above this is ran
        else {
            x.innerHTML = currTime
        }
        currTime = currTime - 5;    //Logic error at "=="
        }, timeout);
        timeout = timeout + 500;    //Logic Error at "=="
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

        var interID = new Array();

        function startButtonClick(){
            document.getElementById("btnStart").disabled = true;
            document.getElementById("btnStop").disabled = false;
            let x = document.getElementById("DisplayCountdown");
                runTimer(x);
            
        }
        function stopButtonClick(){
            document.getElementById("btnStart").disabled = false;
            document.getElementById("btnStop").disabled = true;
            for (i = 0; i < 11; i++) { 
                clearTimeout(interID[i]);
            }

        }
