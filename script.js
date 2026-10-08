let button = document.querySelector(".secret-button")
button.addEventListener("click",()=>{console.log("Button clicked!"); 
    let code = prompt("Enter the code:"); 
    if(code === "M37"){location.href = "secret-page.html";} else {alert("Incorrect code!");}})
