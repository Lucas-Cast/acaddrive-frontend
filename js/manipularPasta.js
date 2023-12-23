const inputPasta = document.querySelector("#pasta")
const arquivosDisplay= document.querySelector("#arquivosDisplay")
let pasta = document.getElementById("svgPasta")
let modalRenomear = document.querySelector("#modalRenomear")

//abrir
const abrirPasta = () => {
    window.alert("abriu")
}
//excluir
const excluirPasta = () => {
    this.innerHTML="aaa"
}
//renomear
const renomearPasta = () => {
    modalRenomear.show()
}
//criar pasta
inputPasta.addEventListener("click",function(){
    
    let div = document.createElement('div')

    div.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" onclick="abrirPasta()" height="5em" id="svgPasta" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"/></svg>'
    div.innerHTML+='<label for="svgPasta" onclick="excluirPasta()" id="excluirPasta">X</label><br>'
    div.innerHTML+='<label for="svgPasta" onclick="renomearPasta()" id="renomearPasta">Nova Pasta<i class="bi bi-pencil-fill" ></i></label>'
    arquivosDisplay.appendChild(div)

}) 