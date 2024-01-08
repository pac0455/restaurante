const comida = document.querySelector('.comida')
let categoria = document.querySelectorAll('.categorias')
let id = 0
const cards = (nombre, contenido, precio, imagen_url) => {
    let template = /*html */`
    <div class="comida_card">
    <div class="imagen"  id="id${id}"></div>
        <div class="descripcion">
            <div class="nombre">${nombre}</div>
            <div class="contenido">${contenido}</div>
            <div class="precio">
                <a href="./../paid_page/">
                    <button>${precio}</button>
                </a>
            </div>
        </div>
    </div>
    `
    comida.innerHTML += template
    document.querySelector(`#id${id}`).style.backgroundImage = `url(${imagen_url})`
    id++
}
const menu = () => {
    comida.innerHTML = '';
    cards('Menu1', '1kebab, patatas fritas y bebida a elegir', '5,00€', '../../img/menu1.jpg')
    cards('Menu2', 'Plato combinado carne,tomate,patatas fritas, patatas fritas y bebida a elegir', '8,00€', '../../img/menu2.jpg')
    cards('Menu3', 'Patatas fritas con salsa,shawarma y cocacola', '6,00€', '../../img/menu3.jpg')
    cards('Menu1', '1kebab, patatas fritas y bebida a elegir', '5,00€', '../../img/menu1.jpg')
    cards('Menu2', 'Plato combinado carne,tomate,patatas fritas, patatas fritas y bebida a elegir', '8,00€', '../../img/menu2.jpg')
    cards('Menu3', 'Patatas fritas con salsa,shawarma y cocacola', '6,00€', '../../img/menu3.jpg')
    cards('Menu1', '1kebab, patatas fritas y bebida a elegir', '5,00€', '../../img/menu1.jpg')
    cards('Menu2', 'Plato combinado carne,tomate,patatas fritas, patatas fritas y bebida a elegir', '8,00€', '../../img/menu2.jpg')
    cards('Menu3', 'Patatas fritas con salsa,shawarma y cocacola', '6,00€', '../../img/menu3.jpg')



}
const kebabs = () => {
    comida.innerHTML = '';
}
const durum = () => {
    comida.innerHTML = '';
}
const platos_combinados = () => {
    comida.innerHTML = '';
}
const bebidas = () => {
    comida.innerHTML = '';
}
const promociones = () => {
    comida.innerHTML = '';
    cards('2x1', '2 kebabs disponibles hasta el 31 de octubre', '4,00€', '../../img/2x1.jpg  ')

}
menu()

document.querySelectorAll('.categorias').forEach((e) => {
    e.addEventListener('click', () => {
        let opt = e.textContent;
        switch (opt) {
            case 'MENU':
                menu()
                break;
            case 'kebabs':
                kebabs()
                break;
            case 'durum':
                durum()
                break;
            case 'Platos combinados':
                durum()
                break;
            case 'Bebidas':
                bebidas()
                break;
            case 'Promociones':
                    promociones()
                break;
        }
    })
})
document.querySelector('#menus').click()