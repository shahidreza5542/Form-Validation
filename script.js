const name = document.getElementById('name')
const email = document.getElementById('email')
const inputBtn = document.getElementById('inputBtn')
const form = document.getElementById('form')

let valuename = "Shahid Reza";
let valueemail = "shahidreza660@gmail.com";

inputBtn.addEventListener(('click'), function(event) {
    event.preventDefault()
    if (name.value === valuename, email.value === valueemail) {
        alert(`welcom ${valuename}`);
        
    } else {
        alert("worng name,email")
    }
        
} )