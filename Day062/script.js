const countValue = document.querySelector('.digit');

const increment = () => {
 let value = parseInt(countValue.innerText);
 value = value + 1;
 countValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};