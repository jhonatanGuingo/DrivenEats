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

 