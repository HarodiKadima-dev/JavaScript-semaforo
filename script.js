//valor inicial do estado
let estado='verde';

//pegando cada elemento pelo id no html
const verde=document.getElementById('verde');
const amarelo=document.getElementById('amarelo');
const vermelho=document.getElementById('vermelho');

//função que vai mudar as cores do semáforo
function mudarEstado(){
  if(estado==='verde'){
    estado='amarelo';
    verde.style.backgroundColor='grey';
    amarelo.style.backgroundColor='yellow';
    setTimeout(mudarEstado,3000); //3s
  }else if(estado==='amarelo'){
    estado='vermelho';
    amarelo.style.backgroundColor='grey';
    vermelho.style.backgroundColor='red';
    setTimeout(mudarEstado,7000); //7s 
  }else {
    estado='verde';
    vermelho.style.backgroundColor='grey';
    verde.style.backgroundColor='green';
    setTimeout(mudarEstado,7000); //7s
  }
}
mudarEstado(); //inicio

