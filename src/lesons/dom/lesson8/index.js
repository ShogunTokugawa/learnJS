let boxes = document.querySelector('.boxes');
let activeBox;
boxes.addEventListener('click', event => {
    let item = event.target;
    if (!item.classList.contains('box')) {
        return;
    }
    item.classList.add('green');
    activeBox && activeBox.classList.remove('green');
    activeBox = item;
});