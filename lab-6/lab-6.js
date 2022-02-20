document.write('Hello, World!');



function add(){
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    document.getElementById("calculator").innerHTML = (parseInt(n1.value) + parseInt(n2.value));
}

function sub(){
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    document.getElementById("calculator").innerHTML = (parseInt(n1.value) - parseInt(n2.value));
}

function multi(){
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    document.getElementById("calculator").innerHTML = (parseInt(n1.value) * parseInt(n2.value));
}

function division(){
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    document.getElementById("calculator").innerHTML = (parseInt(n1.value) / parseInt(n2.value));
}