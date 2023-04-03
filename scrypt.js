let priceF = '';
let nameF = '';
let priceD = '';
let nameD = '';
let priceE = '';
let nameE = '';
let total =0;


function whatsApp() {
    nameF = document.querySelector('.container-comidas .borda .comida').innerText;
    priceF =document.querySelector('.container-comidas .borda .price').innerText;
    priceF = priceF.substring(2);
    priceF = priceF.replace(',', '.');
    console.log(priceF);

    nameD = document.querySelector('.container-bebidas .borda .bebida').innerText;
    priceD =document.querySelector('.container-bebidas .borda .price').innerText;
    priceD = priceD.substring(2);
    priceD = priceD.replace(',', '.');
    console.log(priceD);
 
    nameE = document.querySelector('.container-entradas .borda .entrada').innerText;
    priceE =document.querySelector('.container-entradas .borda .price').innerText;
    priceE = priceE.substring(2);
    priceE = priceE.replace(',', '.');
    console.log(priceE);

    total = Number(priceF) + Number(priceD) + Number(priceE);
    total = total.toFixed(2);
    total = `${total}`;
    total=total.replace('.', ',');
    total = 'R$'+total;
    console.log(total);

    let wpp = "https://wa.me/32985039406?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${nameF}\n- Bebida: ${nameD}\n- Sobremesa : ${nameE}\nTotal: ${total}\n`);
    console.log(wpp);
    window.open(wpp);

}

function selecionarPrato(seletor){    

    const botaoSelecionadoAnteriormente = document.querySelector('.container-comidas .borda');
    
    
    if ( botaoSelecionadoAnteriormente !== null ){
        botaoSelecionadoAnteriormente.classList.remove('borda');

    }

   
    seletor.classList.add('borda');
    verificarSelecao();
}

function selecionarBebida(seletor){    

    const botaoSelecionadoAnteriormente = document.querySelector('.container-bebidas .borda');
    
    if ( botaoSelecionadoAnteriormente !== null ){
        botaoSelecionadoAnteriormente.classList.remove('borda');
    }
    seletor.classList.add('borda');
    verificarSelecao();
}


function selecionarEntrada(seletor){    

    const botaoSelecionadoAnteriormente = document.querySelector('.container-entradas .borda');
    
    if ( botaoSelecionadoAnteriormente !== null ){
        botaoSelecionadoAnteriormente.classList.remove('borda');
    }
    seletor.classList.add('borda');
    verificarSelecao();
}

function verificarSelecao(){

    const selecao1 = document.querySelector('.container-comidas .borda' );
    const selecao2 = document.querySelector('.container-bebidas .borda' );
    const selecao3 = document.querySelector('.container-entradas .borda' );

    if (selecao1 !== null  && selecao2 !== null && selecao3 !== null){
        const fechar = document.querySelector('.rodape .fechar-pedido');
        fechar.innerHTML = "Fechar Pedido";
        fechar.classList.add('green');
        document.querySelector('.button').disabled = false;
    }

}

 