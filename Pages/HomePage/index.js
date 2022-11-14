const nav = document.getElementById("navbar-wrapper");

for (const link of nav.getElementsByTagName("a")) {
    link.onmousemove = e => {
        const rect = link.getBoundingClientRect(),
            img = link.querySelector("img");

        img.style.left = `${e.clientX - rect.left}px`;
        img.style.top = `${e.clientY - rect.top}px`;
    }
}

window.onmousemove = e => {
    const percent = e.clientY / window.innerHeight;

    nav.animate({
        transform: `translateY(${percent * nav.offsetHeight * -1}px)`
    }, {
        fill: "forwards",
        duration: 4000
    })
}

function changeTitle(newtitle) {
    document.title = newtitle;
}