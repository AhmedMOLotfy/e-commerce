var msgInp = document.getElementById("msg-area");

var nameSpan = document.querySelector("span.name");
var emailSpan = document.querySelector("span.email");
var msgSpan = document.querySelector("span.mess");



var nameInput = document.querySelector(".nameInput");
var emailInput = document.querySelector(".emailInput");

function checkName(){
    if(nameInput.value.length <= 0){
        nameSpan.innerHTML = "field must not be empty";
        nameInput.style.border = "2px solid red";
        return false;
    }
    else {
        nameSpan.innerHTML = "";
        nameInput.style.border = "1px solid black";
        return true;
    }
}

function checkEmail(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailInput.value.match(validRegex)){
        emailSpan.innerHTML = "enter a valid email";
        emailInput.style.border = "2px solid red";
        return false;
    }
    else {
        emailSpan.innerHTML = "";
        emailInput.style.border = "1px solid black"
        return true;
    }
}

function checkMessage(){
    if(msgInp.value.length < 1){
        msgSpan.innerHTML = "message can not be empty";
        msgInp.style.border = "2px solid red";
        return false;
    }
    else {
        msgSpan.innerHTML = "";
        msgInp.style.border = "1px solid black";
        return true;
    }
}


document.getElementById("submit").addEventListener("click",function (e){
    checkName() ; checkEmail();checkMessage();
    if(checkName() && checkEmail() && checkMessage()){
        var ele = document.getElementById("sent");
        ele.style.color = "green";
        ele.innerHTML = "message sent successfully"
        msgInp.value = "";

        // location.replace("/success.html");
    }
    else { 
        e.preventDefault();
        var ele = document.getElementById("sent");
        ele.style.color = "red";
        ele.innerHTML = "message can not be sent"
    }

});

