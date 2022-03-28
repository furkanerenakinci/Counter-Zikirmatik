let sayac = 0
let sayacDOM = document.querySelector('#sayac')
let arttirDOM = document.querySelector('#arttir')
let azaltDOM = document.querySelector('#azalt')

arttirDOM.addEventListener("click", whenClick )
azaltDOM.addEventListener("click", whenClick )

function whenClick() {
    console.log(this.id)
    if (this.id == "arttir") {
        sayacDOM.innerHTML = sayac += 1
    }else {
        sayacDOM.innerHTML = sayac -= 1
    }
}