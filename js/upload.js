const inputArqv = document.querySelector('#arquivo')
const preview = document.querySelector('#preview')
const btnDownload = document.querySelector('#download')
const arquivoAberto = document.querySelector('#arquivoAberto')


//Input arquivo e download arquivo 

inputArqv.addEventListener("change", function(){
    const arquivo= this.files[0]
    const nomeArquivo = this.files[0].name
    arquivoAberto.innerHTML=`${nomeArquivo}`
    const leitor = new FileReader()

    leitor.addEventListener("load", function(){
        preview.value=leitor.result
    })

    if(arquivo){
        leitor.readAsText(arquivo)
        
    }
})

const download= function(){
    const a = document.createElement('a')
    a.style="display:none;"
    document.body.appendChild(a)
    return function(conteudo,nomeArquivo){
        const blob= new Blob([conteudo], { type: "octet/stream" })
        const url = window.URL.createObjectURL(blob)
        a.href=url 
        a.download=nomeArquivo
        a.click()
        window.URL.revokeObjectURL(url)
    }
}

btnDownload.addEventListener("click", function(){
    download()(preview.value,arquivoAberto.innerHTML)
})

