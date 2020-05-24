const dom6 = () => {
    let div = document.querySelector('div');
    let button = document.querySelector('button');
    if (div.classList.contains('none')) {
        div.classList.remove('none');
        button.innerHTML = "скрыть";
    }
    else {
        div.classList.add('none');
        button.innerHTML = "показать";
    }
};

