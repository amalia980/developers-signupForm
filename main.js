
const myBtn = document.getElementById("submit-btn");

const errorFname = document.getElementById("error-fName");
const myFirstName = document.getElementById("firstname");

const errorLname = document.getElementById("error-LName");
const myLastname = document.getElementById("lastname");

const errorEmail = document.getElementById("error-email");
const myEmail = document.getElementById("email");

const errorPassword = document.getElementById("error-password");
const myPassword = document.getElementById("password");



myBtn.addEventListener("click", function(e) {
    e.preventDefault();

    /*============ FIRST NAME =============*/
    if (myFirstName.value.length <=2) {
        errorFname.innerText = "Please enter First name*";
    }
    else if (myFirstName.value.length >= 2) {
        errorFname.innerText = ""; //empty the error message
    }

    /*============ LAST NAME =============*/
    if (myLastname.value.length <= 2) {
        errorLname.innerText = "Please enter Last name*";
    }
    else if (myLastname.value.length >= 2) {
        errorLname.innerText = "";
    }
    
    /*============= EMAIL ============*/
    if (!myEmail.value.includes("@")) {
        errorEmail.innerText = "Please enter correct Email*";
    }
    else if (myEmail.value.length >= 2) {
        errorEmail.innerText = "";
    }

    /*============ PASSWORD =============*/
    if (myPassword.value.length < 6) {
        errorPassword.innerText = "Please enter at least 6 characters*";
    }
    else if (myPassword.value.length >= 2) {
        errorPassword.innerText = "";
    }

    /*============ SEND TO NEXT PAGE =============*/
    else {

        const myAnchor = document.getElementById("anchor");

        myAnchor.setAttribute('href');
        /*
        const anchor = document.createElement("a");
        anchor.setAttribute("href", 'success.html');

        anchor.appendChild(myBtn);
        */
    }

});

