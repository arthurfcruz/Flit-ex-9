const select = document.getElementById('tamanho')
const itens = document.querySelector(".itens")

select.addEventListener("change",tamanho)

function tamanho() {
    var value = select.value
    switch (value) {
        case '2':
            itens.style.gridTemplateColumns = 'auto auto';
            break;
        case '3':
            itens.style.gridTemplateColumns = 'auto auto auto';
            break;
        case '5':
            itens.style.gridTemplateColumns = 'auto auto auto auto auto';
            break;
        default:
            break;
    }
}