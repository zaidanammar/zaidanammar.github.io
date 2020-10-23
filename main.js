var icerock = document.getElementsByClassName('icerock');
var polar = document.getElementsByClassName('polar')
var shooting  = document.getElementById('shoot')

let finish;
let score;
let icerockBefore;

function polarRandom(icerock) {

    let random = Math.floor(Math.random() * icerock.length)
    let pRandom = icerock[random]

    if (pRandom == icerockBefore) {
        polarRandom(icerock)
    } 
    icerockBefore = pRandom
    return pRandom
}

function timesRandom(min, max) {
    
    return Math.round(Math.random() * (max - min) + min)
}

function showMe() {
    
    let pRandom = polarRandom(icerock)
    let tRandom = timesRandom(300,500)
    pRandom.classList.add('show')

    setTimeout(() => {
        pRandom.classList.remove('show')
        if (!finish) {
            showMe(icerock);
        }
    }, tRandom);

}


function startMe() {
    finish = false;
    score = 0;
    showMe(icerock);

    setTimeout(() => {
        finish = true;
    }, 10000);
}

function hitMe () {
    score++
    document.getElementById('nilai').innerHTML = score
    shooting.play()
    this.parentNode.classList.remove('show')
}
