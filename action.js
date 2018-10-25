/*

function checkEmail(email) {
    var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
    return regExp.test(email);

    if(checkEmail(email)) {
        $result.text(email + " is valid :)");
        $result.css("color", "green");

    } else {

}

email.onkeydown=function () {
        var
}

}

function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    
    if {

    } else {
       
    }
}
*/

//email

document.getElementById(email).onkeyup = function () {
    var email = document.getElementById("email");

    var regExp = new regExp("<");

    if (regExp.test(document.getElementById("email").value)) {
        email.style.backgroundColor = "red";
    }
    else (email.style.backgroundColor = "")
}

// age

document.getElementById(age).onkeyup = function () {
    var age = document.getElementById("age");

    var regExp = new regExp("<");

    if (regExp.test(document.getElementById("age").value)) {
        age.style.backgroundColor = "red";
    }
    else (age.style.backgroundColor = "")
}

//name

document.getElementById(name).onkeyup = function () {
    var name = document.getElementById("name");

    var regExp = new regExp("<");

    if (regExp.test(document.getElementById("name").value)) {
        name.style.backgroundColor = "red";
    }
    else (name.style.backgroundColor = "")
}