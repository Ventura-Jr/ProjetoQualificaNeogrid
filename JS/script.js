// função do botão voltar
function goBack() {
    window.history.back();
  }


  
// função de trocar imagem automaticamente no slide
let count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
  proxImagem()
}, 5000) 

function proxImagem(){
  count++;
  if(count>4){
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

