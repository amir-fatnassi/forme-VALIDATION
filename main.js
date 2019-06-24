const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const address = document.getElementById('address');

const form = document.getElementById('myForm');
const regex=/^[a-zA-Z ]+$/;
const regexP= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const regexE= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function testName(){
    if ((firstName.value==='') || !(regex.test(firstName.value)) ) {
        alert(`${firstName.name} must not be empty or number`);
    }else if ((lastName.value==='') || !(regex.test(lastName.value)) ) {
        alert(`${lastName.name} must not be empty or number`);
    }else if ((password.value==='') || !(regexP.test(password.value)) ) {
        alert(`${password.name} must not be empty or number`);
    }else if ((confirmPassword.value==='') ||(password.value!==confirmPassword.value) || !(regexP.test(confirmPassword.value)) ) {
        alert(`${confirmPassword.name} must not be empty or number`);
    }else if ((email.value==='')  || !(regexE.test(email.value)) ) {
        alert(`${email.name} must not be empty or number`);
    }else if ((firstName.value==='') || !(regex.test(firstName.value)) ) {
        alert(`${firstName.name} must not be empty or number`);
    }                 
}