var toggleHamburger = () => {
    let list = document.getElementById("mobileUl");
    var bioContainer = document.querySelector(".bioContainer");
    if (list.style.display == "none"){
        list.style.display = "inline";
        if (bioContainer) bioContainer.style.marginTop = "220px";
    }
    else{
        list.style.display = "none";
        if (bioContainer) bioContainer.style.marginTop = "150px";
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

var toggleAlbum = (button) => {
    var songList = button.nextElementSibling;
    if (songList.style.display == "none"){
        songList.style.display = "block";
    }
    else{
        songList.style.display = "none";
    }

    if (typeof window.syncPoemColumns === "function") {
        requestAnimationFrame(() => {
            window.syncPoemColumns();
        });
    }
};

(function initYouTubeFacades() {
    function activate(facade) {
        if (facade.dataset.loaded === "1") return;
        var id = facade.getAttribute("data-youtube-id");
        if (!id) return;
        var title = facade.getAttribute("data-title") || "YouTube video";
        facade.dataset.loaded = "1";
        var inner = document.createElement("div");
        inner.className = "ytFrameInner";
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1";
        iframe.title = title;
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        iframe.setAttribute("allowfullscreen", "");
        inner.appendChild(iframe);
        facade.replaceChildren(inner);
    }

    document.querySelectorAll(".ytFacade").forEach(function (facade) {
        facade.addEventListener("click", function () { activate(facade); });
        facade.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                activate(facade);
            }
        });
    });
})();
