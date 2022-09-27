//creating a button element
const buttonElements = document.querySelectorAll('button');
//identifying the row and column(start)
let currentRow = 1;
let letter = 1;
//
const wordLetters = document.querySelectorAll('.tile')
//gets the value clicked on keyboard
buttonElements.forEach((element) => {
    element.addEventListener('click', function () {
    onclick(element.attributes["data-key"].value)
    });
});

function updateWord(key){
    wordLetters[currentRow - 1].querySelectorAll('.word')[letter - 1].innerText = key;
    letter += 1;
}

function onclick(key) {
    if (key.toUpperCase() === 'enter') {
        //should enter the word
    } else if (key.toUpperCase() === '«') {
        //should delete the letter
    }else {
        updateWord(key);
    }
}