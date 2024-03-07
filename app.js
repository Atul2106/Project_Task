let form=document.querySelector(".form-control");
let un = document.querySelector("#username");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let message = document.querySelector("#message");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let Username = un.value;
    let email = email.value;
    let number = number.value;
    let message = message.value;

    console.log(`Full name: ${username},Email: ${email}, Number: ${number}, message: ${message}`);
});