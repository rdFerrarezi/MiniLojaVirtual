const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'camiseta.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'short',
        img: 'shorts.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'sapato',
        img: 'shoes.jpg',
        quantidade: 0
    }
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        //console.log(val.nome);
        containerProdutos.innerHTML+= `
        <div class="produto-single">
            <img src="./img/`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho<a/>
        </div>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
        //console.log(val.nome);
        containerCarrinho.innerHTML+= `
        <div class="info-single-checkout">
            <p id="prodID" style="float:left;">Produto: `+val.nome+`</p>
            <p style="float:right;">Quantidade: `+val.quantidade+`</p>
            <div style="clear:both"></div>
            
        </div>
        `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}