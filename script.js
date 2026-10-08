let button = document.querySelector(".secret-button")
button.addEventListener("click",()=>{console.log("Button clicked!"); 
    let code = prompt("Enter the code:"); 
    let video = document.querySelector("video");
    if(code === "BDR"){location.href = "secret-page.html";}  else {video.style.display = "block"; video.play();}})