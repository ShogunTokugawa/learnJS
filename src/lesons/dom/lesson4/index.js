const dom4 = () => {
    let inp1 = document.querySelector('.one').value;
    let inp2 = document.querySelector('.two').value;
    console.log(inp1, inp2);
    document.querySelector('.one').value = inp2;
    document.querySelector('.two').value = inp1;
};
