// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let submitBtnEl = document.getElementById("submitBtn");
let bookmarksListEl = document.getElementById("bookmarksList");
let bgContainerEl = document.getElementById("bgContainer");

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

if (siteNameInputEl.value === "") {
    siteNameErrMsgEl.textContent = "Required*";
} else if (siteUrlInputEl.value === "") {
    siteUrlErrMsgEl.textContent = "Required*";
}

submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    if ((siteUrlInputEl.value !== "") && (siteUrlInputEl.value !== "")) {
        let bookmarkContainer = document.createElement("div");
        bookmarkContainer.style.backgroundColor = "#f5f7fa";
        bookmarkContainer.style.borderRadius = "10px";
        bgContainerEl.appendChild(bookmarkContainer);
        bookmarkContainer.appendChild(bookmarksListEl);



        let heading = document.createElement("h1");
        heading.textContent = siteNameInputEl.value;
        heading.style.color = "#323f4b";
        heading.style.fontWeight = "bold";
        heading.style.fontSize = "15px";
        bookmarksListEl.appendChild(heading);

        let url = document.getElementById("anchorEle");
        url.href = siteUrlInputEl.value;
        url.textContent = siteUrlInputEl.value;
        bookmarksListEl.appendChild(url);
        submitBtnEl.style.backgroundColor = "primary";
    }
});


bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});