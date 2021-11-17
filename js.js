let buttonLugar = document.querySelector(".button-lugar")

let hidLugar = document.querySelector(".hid1-lugar")

buttonLugar.addEventListener("click", function() {
    if(hidLugar.style.display == "none") {
        hidLugar.style.display = "inline"
    } else {
        hidLugar.style.display = "none"
    }
})


let buttonBalde = document.querySelector(".button-balde")

let hidBalde = document.querySelector(".hid1-balde")

buttonBalde.addEventListener("click", function() {
    console.log("hi there")
    if(hidBalde.style.display == "none") {
        hidBalde.style.display = "inline"
    } else {
        hidBalde.style.display = "none"
    }
})



let buttonLugar2 = document.querySelector(".button-lugar2")

let hidLugar2 = document.querySelector("p.lugar")


buttonLugar2.addEventListener("click", function() {
     if(hidLugar2.style.display == "none") {
        hidLugar2.style.display = "block"
    } else {
        hidLugar2.style.display = "none"
    }
})



let buttonBalde2 = document.querySelector(".button-balde2")

let hidBalde2 = document.querySelector("p.balde")

buttonBalde2.addEventListener("click", function() {
    console.log("hi there")
    if(hidBalde2.style.display == "none") {
        hidBalde2.style.display = "block"

    } else {
        hidBalde2.style.display = "none"

    }
})