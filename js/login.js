function popup(){
        alert("Login functionality is not implemented yet.");
    }
    
    document.getElementById("email").oninput = function() {
    let msg = this.value.trim();
    let warn = document.getElementById("warn");

    if (msg === "") {
        warn.style.display = "none";       
    } 
    else if (!msg.includes("@")) {
        warn.style.display = "block";      
    } 
    else {
        warn.style.display = "none";       
    }
}