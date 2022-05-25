let vitrine = document.querySelector('.vitrine')
atribuindoCards(data, 'todos')

function criandoVitrine(arr) {

    let cardProduto = document.createElement('div')
    let img = document.createElement("img")
    let cardProdutoDescricao = document.createElement('div')
    let span = document.createElement('span')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let h5 = document.createElement('h5')
    let button = document.createElement('button')

    cardProduto.classList.add('cardProduto')
    img.src = `${arr.img}`
    console.log(img)
    cardProdutoDescricao.classList.add('cardProdutoDescricao')
    span.innerText = arr.tag[0]
    h4.innerText = arr.nameItem
    p.innerText = arr.description
    h5.innerText = 'R$ ' + arr.value + '.00'
    button.classList.add('comprar')
    button.id = arr.id
    button.innerText = arr.addCart

    cardProduto.appendChild(img)
    cardProdutoDescricao.appendChild(span)
    cardProdutoDescricao.appendChild(h4)
    cardProdutoDescricao.appendChild(p)
    cardProdutoDescricao.appendChild(h5)
    cardProdutoDescricao.appendChild(button)

    cardProduto.appendChild(cardProdutoDescricao)
    return cardProduto
}

function atribuindoCards(arr, tipo) {
    for (let i = 0; i < arr.length; i++) {
        if (tipo == 'todos') {
            vitrine.appendChild(criandoVitrine(data[i]))
        } else if (tipo == 'acessorios') {
            if (data[i].tag[0] == 'Acessórios') {
                vitrine.appendChild(criandoVitrine(data[i]))
            }
        } else if (tipo == 'camisetas') {
            if (data[i].tag[0] == 'Camisetas') {
                vitrine.appendChild(criandoVitrine(data[i]))
            }
        } else {
            vitrine.innerText = ''
            vitrine.innerHTML = `<img class='img-sem-estoque'src='./img/produto-esgotado.png'>`
        }
    }
}

addEventListener("click", (e) => {
    let tipo = e.target.id;
    let tag = e.target.tagName;
    //console.log(tipo,tag,classNome)
    if (tag = 'A') {
        if (tipo == 'todos') {
            //alert("todos")
            vitrine.innerText = ''
            atribuindoCards(data, tipo)
        }
        if (tipo == 'acessorios') {
            //alert("acessorios")
            vitrine.innerText = ''
            atribuindoCards(data, tipo)
        }
        if (tipo == 'calcados') {
            //alert("calcados")
            vitrine.innerText = ''
            atribuindoCards(data, tipo)
        }
        if (tipo == 'camisetas') {
            //alert("camisetas")
            vitrine.innerText = ''
            atribuindoCards(data, tipo)
        }
    }
})
/*-----adicionando no carrinho-------- */
let carrinhoProdutos = [] //nova lista

function produto(id) {
    return data[id]
}

function removerProduto(id) {
    carrinhoProdutos.splice(id, 1)
}

function soma(carrinhoProdutos) {
    let soma = 0
    for (let i = 0; i < carrinhoProdutos.length; i++) {
        soma += carrinhoProdutos[i].value;
    }
    return soma
}
//console.log(soma(data))
addEventListener('click', (e) => {
    let button = e.target
    let butto_id = button.id

    if (button.tagName == 'BUTTON') {
        if (button.className === "comprar") {
            let prod = produto(butto_id - 1)
            carrinhoProdutos.push(prod)
            atualizarCarrinho(carrinhoProdutos)
        }
    }
    if (button.className == "remover-produto") {
        removerProduto(butto_id);
        atualizarCarrinho(carrinhoProdutos);
        return;
    }
})

function atualizarCarrinho(arr) {
    let quantidade = 0
    console.log(carrinhoProdutos)
    let carrinho = document.querySelector('.carrinho')
    let carrinhoList = document.querySelector(".carrinhoList")
    let ul = document.createElement('ul')
    let div = document.querySelector(".pagamento")
    ul.classList.add("carrinho-compras")
    carrinhoList.innerHTML = ''
    if (arr.length > 0) {
        for (let i = 0; i < carrinhoProdutos.length; i++) {
            ul.innerHTML += `<li class="carrinho-compras_produto">
                <img src="${carrinhoProdutos[i].img}" alt="">
                <div class="carrinho-compras_descricao">
                    <h4>${carrinhoProdutos[i].nameItem}</h4>
                    <h5>${carrinhoProdutos[i].value}</h5>
                <button class="remover-produto">Remover Produto</button>
            </div>
            </li>`
        }
        console.log(ul)
        carrinhoList.appendChild(ul)
        div.innerHTML = ""
        div.innerHTML = ` <div class= 'carinhoDetalhes'>
            <li class="carinhoDetalhes_quant">
                <p>Quantiddade</p>
                <span>${carrinhoProdutos.length}</span>
            </li>
            <li class="carinhoDetalhes_valor">
                <p>Total</p>
                <span>R$ ${soma(carrinhoProdutos)}.00</span>
            </li>
        </div>`
        return
    }
    carrinhoList.innerHTML = ''
    div.innerHTML = ''
    carrinhoList.innerHTML = `<h2>Carrinho vazio </h2>        
        <p>Adicione itens</p>`
}


/*

     <div class="cardProduto">
                <img src="img/jaqueta.svg" alt="Produto Jaqueta">
                <div class="cardProdutoDescricao">
                    <span>Camisetas</span>
                    <h4>Lightweight Jacket</h4>
                    <p>Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...
                    </p>
                    <h5>R$ 100.00</h5>
                    <button class='comprar'>Adicionar ao carrinho</button>
                </div>
            </div>

*/