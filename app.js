function criptografar() {
    let texto = document.getElementById('texto').value
    let textoCriptografado =   texto.replace(/e/g , 'enter')
                                    .replace(/i/g , 'imes')
                                    .replace(/a/g , 'ai')
                                    .replace(/o/g , 'ober')
                                    .replace(/u/g , 'ufat')
    return textoCriptografado  
}



function descriptografar(){
    let texto = document.getElementById('texto').value
    let textoDescriptografado =    texto.replace(/enter/g , 'e')
                                        .replace(/imes/g , 'i')
                                        .replace(/ai/g , 'a')
                                        .replace(/ober/g , 'o')
                                        .replace(/ufat/g , 'u')
    return textoDescriptografado
}

function exibirBotaoCopiar(){
    let botaoCopiar = document.getElementById('btnCopiar')
    botaoCopiar.classList.add('mostrarBotao')
    
    
}

function exibirTextoCriptografado (){
    let resultadoCriptografado = criptografar()
    let div = document.getElementById('principal__resultado')
    div.textContent = resultadoCriptografado
    
    return resultadoCriptografado
    
}


function exibirtextoDescriptografado(){
    let resultadoDescriptografado = descriptografar()
    let div = document.getElementById('principal__resultado')
    div.textContent = resultadoDescriptografado
}

function copiarTexto(){
    let textoCopiado = document.getElementById('principal__resultado')
    //metodo pra copiar e colar no navegador
    navigator.clipboard.writeText(textoCopiado.innerHTML)
    
}


const botaoCriptografar = document.getElementById('btnCriptografar')
botaoCriptografar.addEventListener('click',()=>{
    exibirBotaoCopiar()
    exibirTextoCriptografado()
})

const botaoDescriptografar = document.getElementById('btnDescriptografar')
botaoDescriptografar.addEventListener('click', ()=>{
    exibirBotaoCopiar()
    exibirtextoDescriptografado()
})

const botaoCopiar = document.getElementById('btnCopiar')
botaoCopiar.addEventListener('click', ()=>{
    copiarTexto()
})

