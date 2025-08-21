document.getElementById("bt+Masc").addEventListener("click", function(){inc("quantCamMasc")})
document.getElementById("bt-Masc").addEventListener("click", function(){dec("quantCamMasc")})
document.getElementById("bt+Fem").addEventListener("click", function(){inc("quantCamFem")})
document.getElementById("bt-Fem").addEventListener("click", function(){dec("quantCamFem")})
document.getElementById("concluir").addEventListener("click", concluirCompra)
document.getElementById("bt+Masc").addEventListener("mouseover", ponteiro)
document.getElementById("bt-Masc").addEventListener("mouseover", ponteiro)
document.getElementById("bt+Fem").addEventListener("mouseover", ponteiro)
document.getElementById("bt-Fem").addEventListener("mouseover", ponteiro)
document.getElementById("nome").addEventListener("blur", validaNome)
document.getElementById("email").addEventListener("blur", validaEmail)

function concluirCompra(){
    if(document.getElementById("ajuda_nome").textContent == ""
    && document.getElementById("ajuda_email").textContent == ""
    && document.getElementById("total").value != "R$ 0,00"){
        alert("Compra realizada com sucesso!")
    }else if(document.getElementById("ajuda_nome").textContent != ""
    || document.getElementById("ajuda_email").textContent != ""){
        alert("Dados incompletos.")
    }else if(document.getElementById("total").value == "R$ 0,00"){
        alert("Nenhuma camisa selecionada.")
    }
}

function atualizaTotal(){
    const precoCamMasc = 70.45
    const precoCamFem = 69.55
    const quantCamFem = parseInt(document.getElementById("quantCamFem").value)
    const quantCamMasc = parseInt(document.getElementById("quantCamMasc").value)
    const total = (precoCamMasc * quantCamMasc + precoCamFem * quantCamFem).toFixed(2)
    document.getElementById("total").value = "R$ " + total.replace(".",",")
}

function validaEmail(){
    const email = document.getElementById("email").value
    if(email.indexOf("@") > 0
    && email.indexOf(".") > email.indexOf("@")
    && email[email.length - 1] != "@"
    && email[email.length - 1] != "."
    && email.indexOf(" ") == -1
    && email.indexOf("@", email.indexOf("@") + 1) == -1
    && email.indexOf(".", email.indexOf("@")) - email.indexOf("@") > 1){
        document.getElementById("ajuda_email").textContent = ""
    }else{
        document.getElementById("ajuda_email").textContent = "E-mail Inválido"
    }
}

function validaNome(){
    const nome = document.getElementById("nome").value
    if(nome.length < 2 || verificaNumString(nome)){
        document.getElementById("ajuda_nome").textContent = "Nome Inválido"
    }else{
        document.getElementById("ajuda_nome").textContent = ""
    }
}

function verificaNumString(nome){
    for(letra of nome){
        if(!isNaN(letra) && letra != " "){
            return true
        }
    }
    return false
}

function ponteiro(){
    this.style.cursor = "pointer"
}

function inc(id){
    let valor = parseInt(document.getElementById(id).value)
    if(valor < 10){
        valor = valor + 1
        document.getElementById(id).value = valor
        atualizaTotal()
    }else{
        alert("Entre em contato para comprar quantidades maiores.")
    }
}

function dec(id){
    let valor = parseInt(document.getElementById(id).value)
    if(valor > 0){
        valor = valor - 1
        document.getElementById(id).value = valor
        atualizaTotal()
    }else{
        alert("Não dá para comprar menos que isso.")
    }
}