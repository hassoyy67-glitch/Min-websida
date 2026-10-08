let button = document.querySelector(".secret-button")
button.addEventListener("click",()=>{console.log("Button clicked!"); 
    let code = prompt("Enter the code:"); 
    if(code === "BDR"){location.href = "secret-page.html";} else {alert("Incorrect code!");}})
