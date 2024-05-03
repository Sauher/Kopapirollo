let playerpontsz = 0
let geppontsz = 0

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
        document.getElementById("eredmeny").innerHTML = "Eredmény: Döntetlen"
    }
    else if(botvalaszt == "ko" && ertek == "papir"){
        document.getElementById("eredmeny").innerHTML = "Eredmény: Te nyertél"
        playerpontsz += 1
        document.getElementById("playerpont").innerText = playerpontsz
    }
    else if(botvalaszt == "ko" && ertek == "ollo"){
        document.getElementById("eredmeny").innerHTML = "Eredmény: Vesztettél!"
        geppontsz += 1
        document.getElementById("geppont").innerText = geppontsz
    }
    else if(botvalaszt == "ollo" && ertek == "papir"){
        document.getElementById("eredmeny").innerHTML = "Eredmény: Vesztettél!"
        geppontsz += 1
        document.getElementById("geppont").innerText = geppontsz
    }
    else if(botvalaszt == "papir" && ertek == "ko"){
        document.getElementById("eredmeny").innerHTML = "Eredmény: Vesztettél!"
        geppontsz += 1
        document.getElementById("geppont").innerText = geppontsz
    }
    else if(botvalaszt == "ollo" && ertek == "ko"){
        document.getElementById("eredmeny").innerHTML = "Eredmény: Te nyertél"
        playerpontsz += 1
        document.getElementById("playerpont").innerText = playerpontsz
    }
    else if(botvalaszt == "papir" && ertek == "ollo"){
        playerpontsz += 1
        document.getElementById("playerpont").innerText = playerpontsz
        document.getElementById("eredmeny").innerHTML = "Eredmény: Te nyertél"
    }
    

}
function valaszt(kpo){
    Tisztitas()
    let valasztottelem = document.getElementById(kpo)
    valasztottelem.style.border = "3px solid red"
    Jatek(kpo)
}

