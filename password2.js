let submit = document.getElementById('submit');

const password = "john";
const username = "balo";

function login(){
    let usernameField = document.getElementById('username');
    let pass = document.getElementById('pass').value;

    let  prank = password === pass;

    if(usernameField.value === username){
        alert("Username Recognized");
    } else {
        alert("Invalid username");
    } 

    if(usernameField.value === "" || !pass){
    }else if(!prank) {
        alert('Password does not match');
    } else {
        alert("Password correct");
        alert(`Welcome ${usernameField.value} John!!! You are now a student of melodia academy `);

    }
}
