var toggleHamburger = () => {
    let list = document.getElementById("mobileUl");
    var bioContainer = document.querySelector(".bioContainer");
    if (list.style.display == "none"){
        list.style.display = "inline";
        bioContainer.style.marginTop = "220px";
    }
    else{
        list.style.display = "none";
        bioContainer.style.marginTop = "150px";
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
    if (mobileDropdown.style.display == "block"){
        mobileDropdown.style.display = "none";
    }
    else{
        mobileDropdown.style.display = "block";
    }
});