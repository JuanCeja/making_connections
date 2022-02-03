console.log("page loaded...");

var todd = document.querySelector("#todd");
var keepCount = document.querySelector("#keep-count");
var count = 2;
var connectionsCount = 500;

function approveTodd(){
    todd.remove();
    count--;
    keepCount.innerText = count;
    connectionsCount++;
    connections.innerText = connectionsCount;
}

function rejectTodd(){
    todd.remove();
    count--;
    keepCount.innerText = count;
}

var phil = document.querySelector("#phil");
var keepCount = document.querySelector("#keep-count");
var count = 2;
var connectionsCount = 500;
var connections = document.querySelector("#connections-number")

function approvePhil(){
    phil.remove();
    count--;
    keepCount.innerText = count;
    connectionsCount++;
    connections.innerText = connectionsCount;
}

function rejectPhil(){
    phil.remove();
    count--;
    keepCount.innerText = count;
}

var change = document.querySelector("#change");

function changeName(){
    change.innerText = "LL Cool J"
}