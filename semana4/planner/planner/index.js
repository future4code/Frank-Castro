function criarTarefa() {
    
    let dias = document.getElementById("dias-semana").value
    
    let tarefa = document.getElementById("tarefa").value

    document.getElementById(dias).innerHTML += "<p>*", + tarefa + "</p>"

    document.getElementById("tarefa").value = ""

    document.getElementById("dias-semana").value = "sabado"
    
}