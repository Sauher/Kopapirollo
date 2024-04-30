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
    }
    else if(random == 2){
        botvalaszt = "papir"
    }
    else{
        botvalaszt = "ollo"
    }
    if(botvalaszt == ertek){
        console.log("dont")
    }

}
function valaszt(kpo){
    Tisztitas()
    let valasztottelem = document.getElementById(kpo)
    valasztottelem.style.border = "3px solid red"
    Jatek(kpo)
}

