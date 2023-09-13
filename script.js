var toggleHamburger = () => {
    let list = document.getElementById("mobileUl");
    if (list.style.display == "none"){
        list.style.display = "inline";
    }
    else{
        list.style.display = "none";
    }
}