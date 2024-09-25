let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// alert("hello!");

document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});

// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
// });


// function () 或 () 匿名函数

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/001.jpg") {
        myImage.setAttribute("src", "images/002.png");
    } else {
        myImage.setAttribute("src", "images/001.jpg");
    }
};

let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};
