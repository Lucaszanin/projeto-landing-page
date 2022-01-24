/*

 quando clicar na seta para avançar temos que 
 esconder todas as imaagens e monstras a proxima imagem
    
    a imagem atual começa em 0 por que ela é a primeira 
    assim que for clicacdo no avançar eu preciso aciocionar mais 1 ao contador de imagens 
    para poder saber que agora eu vou mostrar a segunda imagem 

    esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar 

    mostar a proxima imagem
        pegar todas as imagens , descobrir qual é a proxima e colocar a classe mostrar nela

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
const opacidadeAvancar = document.getElementsByClassName('btn-avancar');
const opacidadeVoltar = document.getElementsByClassName('btn-voltar');
let imagemAtual = 0;

/*
    quando clicar na seta para avançar temos que 
    esconder todas as imaagens e monstras a proxima imagem
*/

setaAvancar.addEventListener('click', function () {
     setaVoltar.classList.remove('opaciti')
    //Testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        setaAvancar.classList.add('opaciti')
        console.log(opacidadeAvancar)
        return;
    }
  

    /*
        a imagem atual começa em 0 por que ela é a primeira 
        assim que for clicacdo no avançar eu preciso aciocionar mais 1 ao contador de imagens 
        para poder saber que agora eu vou mostrar a segunda imagem 
    */
        imagemAtual++;


    /* 
     esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar 
    */
   
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*
    mostar a proxima imagem
        pegar todas as imagens , descobrir qual é a proxima e colocar a classe mostrar nela
    */

    imagensPainel[imagemAtual].classList.add('mostrar');
    

})


setaVoltar.addEventListener('click', function () {

    setaAvancar.classList.remove('opaciti')
    if (imagemAtual === 0) {
        setaVoltar.classList.add('opaciti')
        return;
    }
        imagemAtual--;
   

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });



    imagensPainel[imagemAtual].classList.add('mostrar');

})
