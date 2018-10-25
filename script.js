function calcFibonacci(n) {
    let x;
    (n <= 0) && 0; 
    (n == 1) && 1;
    let y = 0;
    let z = 1;
    for(let i = 2; i <= n; i++) {
        x = y + z;
        y = z;
        z = x;
    };
    return z;
}

let list = '',
    min = 0,
    max = 99;

function initSet() {
    for(min; min <= max; min++) {
        list += '<li>N°'+min+' = '+calcFibonacci(min)+'</li>';
        document.querySelector('#list').innerHTML = list;
    }
    assignColor();
}

function nextSet() {
    max += 100;
    list = '';
    initSet();
}

function prevSet() {          
    if (min > 100) {
        min -= 200;
        max -= 100;
        list = '';
        initSet();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function assignColor() {
    const liElts = document.querySelectorAll('li');
    const ulElt = document.querySelector('#list');
    for(i = 0; i < liElts.length; i++) {
        if(liElts[i] !== ulElt.firstChild && ulElt.lastChild) {
            liElts[i].style.color = getRandomColor();
        }
        else if(ulElt.firstChild)
        {
            ulElt.firstChild.style.color = 'black';
        }
        else(ulElt.lastChild)
        {
            ulElt.lastChild.style.color = 'white';
        }
    }
}

window.onload = initSet;