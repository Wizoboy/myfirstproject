

// let password = "balogun";
// let attempts = 3;
// let input;
// const todoInput = document.querySelector('.ment');

// // while (attempts > 0) {
// //     input = prompt("Enter Your Username!" )

// if (todoInput === password) {
//     alert("Access granted!");
//     break;
// } else {
//     attempts--;
//     alert("Incorrect Username" + attempts + " attempts.left")
//     }

// if (attempts === 0){
//     alert("you have exceeded the maximum number of attempts")
// }
// }

// let username = "abdulwaris";
// let attempt = 3;
// let grape;

// while (attempt > 0) {
//     grape = prompt("Enter Your Password" )

// if (grape === username) {
//     alert("Access granted!");
//     break;
// } else {
//     attempt--;
//     alert("Incorrect password " + attempt + " attempts.left")
//     }

// if (attempt === 0){
//     alert("you have exceeded the maximum number of attempts")
// }
// }


// function myFunction() {
//     alert("Access Granted");
//   }




// while (attempts > 0) {
//     input = prompt("enter the password!");

//     if (input === password) {
//         console.log("access granted");
//         break
//     } else {
//         attempts--;
//         console.log("incorrect password." + attempts + "attempts left.")
//     }
// }
// if (attempts === 0) {
//     console.log("you have exceeded the maximum limit of number of attemptss.")
// }







// let submit = document.getElementById('submit')


// const password = "john";
// const username = "balo";

// function login(){
//     let username = document.getElementById('username')
//     let pass =document.getElementById('pass').value


//     let validPass = password ===pass

//    //  let usernameE=username.value
//    //  alert("Username Recognized")


//    if(usernameE=username){
//    alert("Username Recognized")
//    }if(usernameE!=username) {
//       alert("Fvck you")
// }
   

//      if(usernameE=="" || !pass){
//         alert("fill all filed")
//      } else if(password!==pass) {
//         alert('password not macth')

//      } else{

//         alert("password correct")
//         location.href='index.html'
//         alert(`balogun ${usernameE}`)
//      }


// }

let submit = document.getElementById('submit');

const password = "john";
const username = "balo";

function login(){
    let usernameField = document.getElementById('username');
    let pass = document.getElementById('pass').value;

    let  prank = password === pass;

    if(usernameField.value === username){
        document.getElementById("demo").innerHTML =(`Welcome ${usernameField.value}`);

        alert("Username Recognized");
    } else {

        alert("Invalid username");
    } 

    if(usernameField.value === "" || !pass){
    }else if(!prank) {
        alert('Password does not match');
    } else {
        alert("Password correct");
        alert(`Welcome ${usernameField.value}`);
        // window.location.assign("password2.html")
    }
}



// 


// let submit = document.getElementById('submit');

// const password = "john";
// const username = "balo";


// function login() {
//     // Get references to username and password fields
//     let usernameField = document.getElementById('username');
//     let pass = document.getElementById('pass').value;


//     let prank = password === pass;

//     if (usernameField.value === username) {
//         alert("Username Recognized");
//     } else {
//         alert("Invalid username");
//         return; // Exit the function if the username is invalid
//     }

//     // Check if username or password is empty
//     if (usernameField.value === "" || pass === "") {
//         alert("Username or password is empty");
//     } else if (!prank) {
//         alert('Password does not match');
//     } else {
//         alert("Password correct");
//         // Redirect to index.html after successful login
//         location.href = 'password2.html';
//         alert(`Welcome ${usernameField.value}`);
//     }
// }


// submit.addEventListener('click', login);
