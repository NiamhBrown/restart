

function displayName(){
var name = document.getElementById('name').value;
let cardTitle = document.querySelector("#cardTitle");
cardTitle.innerHTML = `${name}'s saving goals`;
}

