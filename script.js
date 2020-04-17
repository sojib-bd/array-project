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

// looping through the data 
const loopBtn = document.getElementById('loopBtn');
loopBtn.addEventListener('click', () => {
    const arr = ['Mango', "Apple", "Banana"];
    for (let element of arr) {
        const itemList = document.getElementById('itemList');
        const item = document.createElement('li');
        item.innerText = element
        itemList.appendChild(item);
    }

})


// Slice an array

const arr = ['📸', '🍔', '🤦', '🔬', '🎈', '🏈'];

const newArr = arr.splice(1, 2);

const sliceBtn = document.getElementById('sliceBtn');

sliceBtn.addEventListener('click', () => {
    display('sliceArray', arr)
})