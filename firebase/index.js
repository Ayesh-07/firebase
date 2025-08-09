
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";




let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form')


form.addEventListener('submit' , (e)=>{
 e.preventDefault();
let getEmail = email.value.trim();  
let getPass = password.value.trim(); 

createUserWithEmailAndPassword(auth, getEmail, getPass)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



})





