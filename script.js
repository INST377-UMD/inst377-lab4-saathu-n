function alertUser() {
    let name = document.getElementById("name").value;
    if (name) {
        alert("Hi " + name + "!");
    } else {
        alert("Please enter your name first!");
    }
}

let isBlue = false;
function changeColor() {
    if (isBlue) {
        document.body.classList.remove("blue-bg");
        document.body.classList.add("pink-bg");
    } else {
        document.body.classList.remove("pink-bg");
        document.body.classList.add("blue-bg");
    }
    isBlue = !isBlue;
}

function validateText() {
    let inputText = document.getElementById("textInput").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(inputText)) {
        alert("Error: Special characters are not allowed!");
    } else {
        alert("Valid text!");
    }
}

function addText() {
    let title = document.getElementById("page-title");
    title.innerText += " - Add Text";
}



