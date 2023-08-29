let themeToggle = document.querySelector('.themeToggle-button');

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    applyTheme(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === 'dark') {
        applyTheme("light");
    }

    else {
        applyTheme("dark");
    }
})

function applyTheme(theme) {
    let body = document.querySelector('body');
    let articles = document.querySelectorAll('.article');
    let footer = document.querySelector('footer');
    let h1 = document.querySelector('a');
    let h2 = document.querySelector('h2');
    let headers3 = document.querySelectorAll('h3');
    let headers4 = document.querySelectorAll('h4');
    let headers5 = document.querySelectorAll('h5');
    let themeToggleIcon = document.querySelector('.themeToggle-path');
    let links = document.querySelectorAll('.socialLinks');
    let paths = document.querySelectorAll('.path');
    let paragraphs = document.querySelectorAll('p');
    let articleUrls = document.querySelectorAll('.articleUrl');
    let backwardButton = document.querySelector('.backWard-btn')
    if (theme === "dark") {
        themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" fill="#fff" class="themeToggle-path"/></svg>';
        themeToggle.className = "themeToggle-button themeToggleDark";
        body.style.backgroundColor = "#202020";
        h1.style.color = "white";
        h2.style.color = "white";
        if (headers3 != null) {
            headers3.forEach((h3) => {
                h3.style.color = "white";
            })
        }
        if (headers4 != null) {
            headers4.forEach((h4) => {
                h4.style.color = "white";
            })
            headers5.forEach((h5) => {
                h5.style.color = "white";
            })
            paragraphs.forEach((p) => {
                p.style.color = "white";
            })
            articleUrls.forEach((url) => {
                url.style.color = "white";
            })
        }

        if (backwardButton != null) {
            backwardButton.style.backgroundColor = "#3D3D3D";
            backwardButton.style.color = "white";
        }
        
        articles.forEach((article) => {
            article.className = "article articleDark";
        })
        if (footer != null) {
            footer.style.backgroundColor = "#141414"
            footer.style.color = "white";
        }

        if (links != null) {
            links.forEach((link) => {
                link.style.color = "white";
                link.className = "socialLinks socialLinksDark"
                paths.forEach((path) => {
                    path.setAttribute("fill", "white");
                })
            })
        }
    }

    else {
        themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q25-3 39 18t-1 44q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q21-14 43-1.5t19 39.5q-14 138-117.5 229T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" fill="black" class="themeToggle-path"/></svg>';
        themeToggle.className = "themeToggle-button themeToggleLight";
        body.style.backgroundColor = "#edeef0";
        h1.style.color = "black";
        h2.style.color = "black";
        if (headers3 != null) {
            headers3.forEach((h3) => {
                h3.style.color = "black";
            })
        }
        if (headers4 != null) {
            headers4.forEach((h4) => {
                h4.style.color = "black";
            })
            headers5.forEach((h5) => {
                h5.style.color = "black";
            })
            paragraphs.forEach((p) => {
                p.style.color = "black";
            })
            articleUrls.forEach((url) => {
                url.style.color = "black";
            })
        }
        if (backwardButton != null) {
            backwardButton.style.backgroundColor = "#c4c4c4";
            backwardButton.style.color = "black"
        }
        
        articles.forEach((article) => {
            article.className = "article articleLight";
        })
        if (footer != null) {
            footer.style.backgroundColor = "#fff"
            footer.style.color = "black";
        }
        if (links != null) {
            links.forEach((link) => {
                link.style.color = "black";
                link.className = "socialLinks socialLinksLight"
                paths.forEach((path) => {
                    path.setAttribute("fill", "black");
                })
            })
        }
    }

    localStorage.setItem("theme", theme);
}