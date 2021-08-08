
const myInputs = document.getElementsByClassName("inputs");
const myBtn = document.getElementsById("submit-btn");

myBtn.addEventListener("click", function(e) {
    e.preventDefault();


    if (myInputs.length === "") {
        alert("Please fill in every input");
    }
});

