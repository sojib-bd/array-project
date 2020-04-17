const fruitBtn = document.querySelector('#fruitBtn');
const vegetableBtn = document.querySelector('#vegetableBtn');
const numberBtn = document.querySelector('#numberBtn');


const fruit = ['🥭', '🍏', '🍍', '🥑 '];
const vegetable = ['🥒 ', '🍅', '🥕', '🥔'];
const number = [1, 2, 3, 5, 6]


const display = (id, input) => {

    const destination = document.getElementById(id);
    destination.innerHTML = `[${input}]`;
}


fruitBtn.addEventListener('click', () => {
    display("fruitArr", fruit)
})

vegetableBtn.addEventListener('click', () => {
    display('vegetableArr', vegetable)
})

numberBtn.addEventListener('click', () => {
    display('numberArr', number)
})
