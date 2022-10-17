const txto = document.querySelector('#first');
const txtwo = document.querySelector('#second');
const txthree = document.querySelector('#third');
const txtfour = document.querySelector('#fourth');
const txtfive = document.querySelector('#fifth');

function ft(){
    txto.classList.add('dnone')
    txtwo.classList.remove('dnone2')
}

function ft1(){
    txtwo.classList.add('dnone2')
    txthree.classList.remove('dnone3')
    
}

function ft2(){
    txthree.classList.add('dnone3')
    txtfour.classList.remove('dnone4')
}

function ft3(){
    txtfour.classList.add('dnone4')
    txtfive.classList.remove('dnone5')
    txtfive.classList.add('don')
}

