let items = localStorage.getItem('itemList')
items = items ? JSON.parse(items) : []
showItem()

function addItem() {
    let pedidoItem    = document.getElementById('pedido').value
    let cantidadItem = document.getElementById('cantidad').value
    let productoItem   = document.getElementById('producto').value
    let valorItem   = document.getElementById('valor').value

    if(pedidoItem && cantidadItem && productoItem && valorItem){
        items.push({ 'pedido': pedidoItem, 'cantidad': cantidadItem, 'producto': productoItem, 'valor': valorItem })
        showItem()
    }
}

function showItem() {
    document.getElementById('pedido').value      = ''
    document.getElementById('cantidad').value    = ''
    document.getElementById('producto').value    = ''
    document.getElementById('valor').value       = ''

    let html = ''
    items.forEach((element, index) => {
        html += `<div class="row justify-content-center mb-3">`
        html += `<div class="col-3">${element.pedido}</div>`
        html += `<div class="col-3">${element.cantidad}</div>`
        html += `<div class="col-3">${element.producto}</div>`
        html += `<div class="col-2">${element.valor}</div>`
        html += `<div class="col-1"><a href="#" class="btn btn-danger" onclick="deleteItem(${index})">X</a></div>`
        html += `</div>`
    });

    localStorage.setItem('itemList', JSON.stringify(items))
    document.getElementById('items').innerHTML = html
}

function deleteItem(item) {
    items.splice(item, 1)
    showItem()
}
