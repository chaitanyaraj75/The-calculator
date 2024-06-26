var noofbuttons = document.getElementsByClassName("keys").length;
// document.querySelector(input).innerHTML="0";
// alert(noofbuttons);
// Variables used in whole script

var input=0;
var tempoutput=-1;
var curroperator="";
var dumboutput="0";
// On Screen Pressed

var noofbuttons = document.querySelectorAll(".keys").length;
for (var i = 0; i < noofbuttons; i++) {
    // var butt=document.querySelectorAll(".keys")[i];
    var key=document.querySelectorAll(".keys")[i]
    key.addEventListener("click", function(){
        // document.querySelector(".upscreen p").innerHTML=tempoutput+curroperator;
        // document.querySelector(".mainscreen h1").innerHTML="0";
        // alert("hi");
        var let=this.innerHTML;
        valueentry(let);
        let=convert(let);
        // alert(let);
        clickanimation(let);
    })
}

//Keyboard pressed

document.addEventListener("keydown",function (event) {
    // alert(event.key);
    var let=event.key;
    // alert(event.key);
    if(let=='Enter'){
        let="=";
    }
    if(let=="Backspace"){
        let="DE";
    }
    if(let=="Delete"){
        let="AC";
    }
    valueentry(let);
    let=convert(let);
    // alert(let);
    pressanimation(let);
    // valueentry(let);
})

//Fuctions

//When a button is pressed on keybord then this animation comes

function pressanimation(i) {
    var key=document.querySelector(".i"+i);
    key.classList.add("pressed");
    // document.querySelector(".upscreen p").innerHTML=key;
    // document.querySelector(".mainscreen h1").innerHTML=".i"+i;
    setTimeout(function () {
        key.classList.remove("pressed");
    }, 100);
}

//When clicked on screen then this animation is used

function clickanimation(i) {
    // alert(".i"+i);
    var key=document.querySelector(".i"+ i);
    key.classList.add("clicked");
    // document.querySelector(".upscreen p").innerHTML=key;
    // document.querySelector(".mainscreen h1").innerHTML=".i"+i;
    setTimeout(function () {
        key.classList.remove("clicked");
    }, 100);
}
//To covert /,*,+,.,=,% into others to access

function convert(let){
    switch (let) {
        case '.':
            let="a";
            break;
        case '%':
            let="b";
            break;
        case '/':
            let="c";
            break;
        case '*':
            let="d";
            break;
        case '+':
            let="e";
            break;
        case '=':
            let="f";
            break;
        default:
            break;
    }
    return let;
}

//Whenever a value in entered then this will run

function valueentry(value){
    if((value>='0'&&value<='9')||value=='.'||value=='00'){
        dumboutput=0;
        if(input=='0'){
            if(value=='.'){
                input=input+value;
            }
            else{
                input=value;
            }
        }
        else{
            input=input+value;
        }
        document.querySelector(".mainscreen h1").innerHTML=input;
    }
    else if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%'){
        // alert(dumboutput);
        
        if(tempoutput==-1){
            if(dumboutput!=0){
                tempoutput=dumboutput;
                dumboutput=0;
                // alert(tempoutput);
            }
            else{
                tempoutput=input;
            }
            curroperator=value;
            input=0;
            document.querySelector(".upscreen p").innerHTML=tempoutput+curroperator;
        }
        else{
            // alert(typeof (tempoutput));
            var out=operation(tempoutput,input,curroperator);
            curroperator=value;
            tempoutput=out;
            // alert(typeof(tempoutput))
            input=0;
            document.querySelector(".upscreen p").innerHTML=tempoutput+curroperator;
        }
        document.querySelector(".mainscreen h1").innerHTML="0";
    }
    else if(value=='='){
        var out=operation(tempoutput,input,curroperator);
        input=0;
        tempoutput=-1;
        curroperator="";
        document.querySelector(".upscreen p").innerHTML="0";
        document.querySelector(".mainscreen h1").innerHTML=out;
        dumboutput=out;
    }
    else if(value=='AC'){
        input=0;
        tempoutput=-1;
        curroperator="";
        document.querySelector(".upscreen p").innerHTML="0";
        document.querySelector(".mainscreen h1").innerHTML="0";
    }
    else if(value=='DE'){
        var n=input.length;
        if(n>1){
            input=input.slice(0,n-1);
        }
        else{
            input=0;
        }
        document.querySelector(".mainscreen h1").innerHTML=input;
    }
    else{
        document.querySelector(".upscreen p").innerHTML="0";
        document.querySelector(".mainscreen h1").innerHTML="ERROR";
        tempoutput=-1;
        dumboutput=0;
        curroperator="";
        input=0;
    }
}

//These are for the operations to be performed

function operation(first,second,operator){
    var a=Number(first);
    var b=Number(second);
    if(operator=='+'){
        return a+b;
    }
    else if(operator=='-'){
        return a-b;
    }
    else if(operator=='/'){
        return a/b;
    }
    else if(operator=='*'){
        return a*b;
    }
    else if(operator=='%'){
        return a%b;
    }
    else{
        return "ERROR";
    }
}