var toggleHamburger = () => {
    let list = document.getElementById("mobileUl");
    if (list.style.display == "none"){
        list.style.display = "inline";
    }
    else{
        list.style.display = "none";
    }
}

var webListen = document.getElementById("webListen");
var webDropdown = document.getElementById("webDropdownMenu");

webListen.addEventListener("mouseover", () => {
    webDropdown.style.display = "block";
});

webListen.addEventListener("mouseleave", () => {
    webDropdown.style.display = "none";
});

var mobileListen = document.getElementById("mobileListen");
var mobileDropdown = document.getElementById("mobileDropdownMenu");

mobileListen.addEventListener("click", () => {
    console.log("hi")
    if (mobileDropdown.style.display == "block"){
        mobileDropdown.style.display = "none";
    }
    else{
        mobileDropdown.style.display = "block";
    }
});