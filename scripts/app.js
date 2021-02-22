const dices = [
    'one', 'two', 'three', 'four', 'five', 'six'
];

// need to solve an issue with premature class adding

const playBtn = document.querySelector('.play-btn');
const diceLeft = document.getElementById('dice-left');
const diceRight = document.getElementById('dice-right');

playBtn.addEventListener("click", () => {
    let tickTack = setInterval(function() {
        diceRoll();
    }, 100);

    setTimeout(function(){
        clearInterval(tickTack)
    }, 2000)

    setTimeout(function() {
        let leftNumber = getRandomNumber(dices);
        let rightNumber = getRandomNumber(dices);
    
        diceLeft.innerHTML = `<img src="./res/${dices[leftNumber]}.png" alt="${dices[leftNumber]}">`;
        diceRight.innerHTML = `<img src="./res/${dices[rightNumber]}.png" alt="${dices[rightNumber]}">`;
    
        if(leftNumber > rightNumber) {
            removeClass(diceRight, 'winner');
            addClass(diceLeft, 'winner')
        }
        else if(leftNumber < rightNumber){
            removeClass(diceLeft, 'winner');
            addClass(diceRight, 'winner');
        }
        else {
            removeClass(diceLeft, 'winner');
            removeClass(diceRight, 'winner');
        }
    }, 2000)
    })

function getRandomNumber(array){
    return Math.floor(Math.random()*array.length);
}

function removeClass(object, className){
    if (object.classList.contains(className)){
        object.classList.remove(className);
    }
}

function addClass(object, className){
    if (!object.classList.contains(className)){
        object.classList.add(className);
    }
}

function diceRoll(){
    let leftNumber = getRandomNumber(dices);
    let rightNumber = getRandomNumber(dices);

    diceLeft.innerHTML = `<img src="./res/${dices[leftNumber]}.png" alt="${dices[leftNumber]}">`;
    diceRight.innerHTML = `<img src="./res/${dices[rightNumber]}.png" alt="${dices[rightNumber]}">`;
}