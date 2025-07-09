function adicionarTarefa () {
    const listaTarefas = document.getElementById('listaTarefas'); 
    let novaTarefa = document.createElement('li');
    let nomeTarefa = document.getElementById('campoPesquisa').value.trim(); 

    if (nomeTarefa !== "") { 
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        let span = document.createElement('span');
        span.textContent = nomeTarefa;

        novaTarefa.appendChild(checkbox);
        novaTarefa.appendChild(span);
        listaTarefas.appendChild(novaTarefa);

        document.getElementById('campoPesquisa').value = "";
    } 
    
    else {
        alert("Preencha o campo de tarefas com alguma atividade!");
    }
};

document.getElementById('listaTarefas').addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        const itemLista = event.target.parentNode;
        const listaTarefas = itemLista.parentNode;

        listaTarefas.removeChild(itemLista);
    }
});