let playerPontszam = 0
let gepPontszam = 0
let eredmenykiiras = document.getElementById("eredmeny")
let playerPontText = document.getElementById("playerpont")
let gepPontText = document.getElementById("geppont")

function Nyereseg(){
    eredmenykiiras.innerHTML = "Eredmény: Te nyertél!"
    playerPontszam += 1
    playerPontText.innerText = playerPontszam
}

function Vesztes(){
    eredmenykiiras.innerHTML = "Eredmény: Vesztettél!"
    gepPontszam += 1
    gepPontText.innerText = gepPontszam
}

function Tisztitas(){
    document.getElementById("ko").style.border = "0px"
    document.getElementById("papir").style.border = "0px"
    document.getElementById("ollo").style.border = "0px"
}

function Jatek(ertek){
    let random = Math.floor((Math.random() * 3) + 1)
    let botvalaszt = ""
    if(random == 1){
        botvalaszt = "ko"
        document.getElementById("gep").src = "ko.jpg"
    }
    else if(random == 2){
        botvalaszt = "papir"
        document.getElementById("gep").src = "papir.jpg"
    }
    else{
        botvalaszt = "ollo"
        document.getElementById("gep").src = "ollo.jpg"
    }
    if(botvalaszt == ertek){
        eredmenykiiras.innerHTML = "Eredmény: Döntetlen"
    }
    else if(botvalaszt == "ko" && ertek == "papir" || botvalaszt == "ollo" && ertek == "ko" || botvalaszt == "papir" && ertek == "ollo"){
        Nyereseg()
    }
    else if(botvalaszt == "ko" && ertek == "ollo" || botvalaszt == "ollo" && ertek == "papir" || botvalaszt == "papir" && ertek == "ko"){
        Vesztes()
    }
}

function valaszt(kpo){
    Tisztitas()
    let valasztottelem = document.getElementById(kpo)
    valasztottelem.style.border = "3px solid red"
    Jatek(kpo)
}