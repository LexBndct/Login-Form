let loginBtn = document.querySelector("#wrapper #login");
let emailbox = document.getElementById("emailbox");
let passwordbox = document.getElementById("passwordbox");
let accountInfo = {test123: 'test'};

function loginbtn() {
    let email = emailbox.value;
    let password = passwordbox.value;

    if (accountInfo[email] && accountInfo[email] === password) {
        alert("Login Successful");
    } else {
        alert("Wrong Username / Password");
    }

    // CLEAR BUTTON IF SUCCESSFUL
    emailbox.value = "";
    passwordbox.value = "";
}

// Sign Up Page
let emailboxSU = document.getElementById("emailbox2");
let passwordboxSU = document.getElementById("passwordboxSU");
let passwordboxSU2 = document.getElementById("passwordboxSU2");

function signup() {
    let email = emailboxSU.value;
    let password1 = passwordboxSU.value;
    let password2 = passwordboxSU2.value;

    if (email.length < 5) {
        alert("Your username must be longer than 5 characters!");
    } else if (password1.length < 3) {
        alert("Your password must be at least 3 characters long");
    } else if (password1 !== password2) {
        alert("Passwords do not match!");
    } else {
        alert("Account created!");
        accountInfo[email] = password1;
        // CLEAR BUTTON IF SUCCESSFUL
        emailboxSU.value = "";
        passwordboxSU.value = "";
        passwordboxSU2.value = "";
    }
    

    console.log(accountInfo);
}


let main = document.getElementById("login");
let wrapper = document.getElementById("wrapper");
let main2 = document.getElementById("login2")
let signups = document.getElementById("signup")
let btnSU = document.querySelector("#login2 #login")
let darkBtn = document.getElementById("darkmodes")

let darkmodeOn = false;

function darkMode() {
    // Toggle dark mode state
    darkmodeOn = !darkmodeOn;

    if(darkmodeOn) {
        // Page 1
        main.style.backgroundColor = "#000";
        main2.style.backgroundColor = "#000";
        wrapper.style.backgroundColor = "#000";
        wrapper.style.border = "0.3px solid white";
        wrapper.style.color = "white";
        loginBtn.style.backgroundColor = "#000";
        loginBtn.style.border = "0.3px solid white";

        // Page 2
        signups.style.backgroundColor = "#000";
        signups.style.border = "0.3px solid white";
        signups.style.color = "white";
        btnSU.style.backgroundColor = "#000";
        btnSU.style.border = "0.3px solid white";

        // Dark Btn
        darkBtn.style.backgroundColor = "#000"
        darkBtn.style.color = "white"
        darkBtn.style.border = "0.3px solid white"
        darkBtn.textContent = "Normal Mode"


    } else {
        main.style.backgroundColor = "";
        main2.style.backgroundColor = "";
        wrapper.style.backgroundColor = "";
        wrapper.style.border = "";
        wrapper.style.color = "";
        loginBtn.style.backgroundColor = "";
        loginBtn.style.border = "";

        signups.style.backgroundColor = "";
        signups.style.border = "";
        signups.style.color = "";
        btnSU.style.backgroundColor = "";
        btnSU.style.border = "";
        btnSU.style.border = "";

        // Dark Btn
        darkBtn.style.backgroundColor = ""
        darkBtn.style.color = ""
        darkBtn.textContent = "Dark Mode"
        darkBtn.style.border = ""
    }
}

