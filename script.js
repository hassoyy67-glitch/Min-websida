let button = document.querySelector(".secret-button")
button.addEventListener("click",()=>{console.log("Button clicked!"); 
    let code = prompt("Enter the code:"); 
    if(code === "M37"){alert("Correct code!");} else {alert("Incorrect code!");}})
