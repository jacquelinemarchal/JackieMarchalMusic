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

/* Newsletter signup modal */
const NEWSLETTER_DISMISSED_KEY = "newsletterDismissed";
// Replace this with your published Google Apps Script web app URL.
// See docs: https://developers.google.com/apps-script/guides/web
const GOOGLE_SHEETS_WEBHOOK_URL = "<YOUR_SCRIPT_WEB_APP_URL>";

function postToGoogleSheet(payload) {
    return fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`Network response not ok (${res.status})`);
        }
        return res.json().catch(() => null);
    });
}

(function initNewsletterPopup() {
    const modal = document.getElementById("newsletterModal");
    if (!modal) return;

    const closeBtn = document.getElementById("newsletterClose");
    const overlay = document.getElementById("newsletterOverlay");
    const form = document.getElementById("newsletterForm");
    const status = document.getElementById("newsletterStatus");
    const emailInput = document.getElementById("newsletterEmail");

    if (!form || !emailInput) return;

    const shouldShow = !localStorage.getItem(NEWSLETTER_DISMISSED_KEY);
    if (!shouldShow) return;

    function openModal() {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        emailInput.focus();
    }

    function closeModal() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        localStorage.setItem(NEWSLETTER_DISMISSED_KEY, "1");
    }

    closeBtn?.addEventListener("click", closeModal);
    overlay?.addEventListener("click", closeModal);

    modal.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = emailInput.value.trim();
        if (!email) return;

        status.textContent = "Sending…";

        postToGoogleSheet({
            email,
            page: window.location.pathname,
            submittedAt: new Date().toISOString(),
        })
            .then(() => {
                status.textContent = "Thanks! You're signed up.";
                setTimeout(closeModal, 1200);
            })
            .catch((err) => {
                console.error(err);
                status.textContent = "Could not submit right now. Please try again later.";
            });
    });

    // Show it after a short delay so the video and page settle.
    setTimeout(openModal, 4500);
})();