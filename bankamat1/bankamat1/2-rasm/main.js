const loginButton = document.getElementById("btn");
const loginInput = document.getElementById("porol");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const password = loginInput.value;  


    if (password === "0336") {
        window.location.href = "/bankamat1/3-rasm/index.html";
    } else {
        alert("Kod noto'g'ri, qayta urinib ko'ring!");  
    } 
});