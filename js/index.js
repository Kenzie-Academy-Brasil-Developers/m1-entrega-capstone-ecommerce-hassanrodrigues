let vitrine = document.querySelector('.vitrine')
atribuindoCards(data,'todos')
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
    img.src = arr.img
    cardProdutoDescricao.classList.add('cardProdutoDescricao')
    span.innerText = arr.tag[0]
    h4.innerText = arr.nameItem
    p.innerText = arr.description
    h5.innerText = arr.value
    button.innerText = arr.addCart

    cardProduto.appendChild(img)
    cardProdutoDescricao.appendChild(span)
    cardProdutoDescricao.appendChild(h4)
    cardProdutoDescricao.appendChild(p)
    cardProdutoDescricao.appendChild(h5)
    cardProdutoDescricao.appendChild(button)

    cardProduto.appendChild(cardProdutoDescricao)
    return cardProduto
    console.log(cardProduto)
}
function atribuindoCards(arr,tipo){
    for (let i = 0; i < arr.length; i++) {
        if(tipo=='todos'){
            vitrine.appendChild(criandoVitrine(data[i]))
        }
        else if(tipo=='acessorios'){
            if(data[i].tag[0]=='Acessórios'){
               
                vitrine.appendChild(criandoVitrine(data[i]))
            }
        }
        else if(tipo=='camisetas'){
            if(data[i].tag[0]=='Camisetas'){
               
                vitrine.appendChild(criandoVitrine(data[i]))
            }
        }else{
            vitrine.innerText = ''
            vitrine.innerHTML = `<img class='img-sem-estoque'src='./img/produto-esgotado.png'>`
        }
      
    
        
    }
}



addEventListener("click", (e) => {
    let tipo = e.target.id;
    let tag = e.target.tagName;
    let classNome = e.target.className;

    console.log(tipo,tag,classNome)
    if(tag = 'A'){
        if(tipo=='todos'){
            //alert("todos")
            vitrine.innerText = ''
            atribuindoCards(data,tipo)
        }
        if(tipo=='acessorios'){
            //alert("acessorios")
            vitrine.innerText = ''
            atribuindoCards(data,tipo)
        }
        if(tipo=='calcados'){
            //alert("calcados")
            vitrine.innerText = ''
            atribuindoCards(data,tipo)
        }  if(tipo=='camisetas'){
            //alert("camisetas")
            vitrine.innerText = ''
            atribuindoCards(data,tipo)
        }
    }
})








/*
     <div class="cardProduto">
                <img src="img/jaqueta.svg" alt="Produto Jaqueta">
                <div class="cardProdutoDescricao">
                    <span>Camisetas</span>
                    <h4>Lightweight Jacket</h4>
                    <p>Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...
                    </p>
                    <h5>R$ 100.00</h5>
                    <button>Adicionar ao carrinho</button>
                </div>
            </div>

*/