const loader = document.querySelector(".loader")
const bg = document.querySelector(".bg")


let load = 0
let int = setInterval(blurring, 30)


function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loader.innerText = `${load}%`
    loader.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` //edit in css part of bg>>filter (property)

}

// Calculation part
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
