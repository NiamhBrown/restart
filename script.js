

function handleSubmit(){
var name = document.getElementById('name').value;
let cardTitle = document.querySelector("#cardTitle");
cardTitle.innerHTML = `${name}'s saving goals`;

var reason = document.getElementById('reason').value;
let cardReason = document.querySelector("#cardReason");
cardReason.innerHTML = `${reason}`;

var amount = document.getElementById('amount').value;
let cardAmount = document.querySelector("#cardAmount");
cardAmount.innerHTML = `${amount}`;

var date = document.getElementById('date').value;
let cardDate = document.querySelector("#cardDate");
cardDate.innerHTML = `${date}`;
}

