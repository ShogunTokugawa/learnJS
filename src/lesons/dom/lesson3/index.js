const dom3 = () => {
    let inp = document.querySelector('input').value;
    if (!inp) {
        alert("Вы ничего не ввели в поле");
    }
    else {
        alert(`Вы ввели ${inp}`);
    }
};
