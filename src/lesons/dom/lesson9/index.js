let buttons = document.querySelector('.buttons');
let result = document.querySelector('.result');
let calculate = document.querySelector('.calculate');
let reset = document.querySelector('.reset');

buttons.addEventListener('click', event => {
    let elem = event.target;
    if (elem.tagName !== 'BUTTON' ) {
        return;
    }
    let lastSymbol = result.value[result.value.length - 1];
    if (isNaN((Number(lastSymbol))) && isNaN(Number(elem.textContent))) {
        //console.log(lastSymbol , elem.textContent);
        result.value = result.value.slice(0, -1) + elem.textContent;
    } else {
        if (result.value.length === 1 && result.value === "0") {
            result.value = elem.textContent;
        } else {
            result.value += elem.textContent;
        }
    }
    console.log(result.value);
});

calculate.onclick = () => {
    result.value = eval(result.value);
};

reset.onclick = () => {
    result.value = "0";
};