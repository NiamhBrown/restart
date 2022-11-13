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
    
    //changes the background colour of the card when user clicks on coloured circles
    
    const cardBackground = document.querySelector(".card")
    
    const color1Color = document.querySelector(".color1");
    color1Color.addEventListener("click", function () {
    cardBackground.style.backgroundColor = "red";
    });
    
    const color2Color = document.querySelector(".color2");
    color2Color.addEventListener("click", function () {
    cardBackground.style.backgroundColor = "grey";
    });
    
    const color3Color = document.querySelector(".color3");
    color3Color.addEventListener("click", function () {
    cardBackground.style.backgroundColor = "blue";
    });