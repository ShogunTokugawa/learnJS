let kvadrat = document.querySelector('div');
kvadrat.onmouseover = function () {
    kvadrat.classList.add('green');
}
kvadrat.onmouseout = function () {
    kvadrat.classList.remove('green');
}