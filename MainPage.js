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

var getCamera = async function (camera, mode) {
    var options = { audio: false, video: { width: 540, facingMode: mode } } // environment
    var mediaStream = await navigator.mediaDevices.getUserMedia(options)
    camera.srcObject = mediaStream
    await new Promise(function (Fsignalfin) { camera.onloadedmetadata = Fsignalfin })
}
