/* Quando o usuário clica no botão,
alternar entre mostrar e esconder o conteúdo do dropdown */

// função de abrir lista CURSO
function curso() {
    document.getElementById("curso").classList.toggle("show");
}


// função de abrir lista CARGA HORÁRIA
function carga_horaria() {
    document.getElementById("carga_horaria").classList.toggle("show");
}

// função de abrir lista DATA DE LANÇAMENTO
function data_de_lancamento() {
    document.getElementById("data_de_lancamento").classList.toggle("show");
}



// função de selecionar um item na lista e ficar como principal CURSO
function selecionar_curso(itemName) {
    
    document.getElementById("dropdownButtonText_Cursos").innerText = itemName;
    
    document.getElementById("curso").classList.remove('show');
}


// função de selecionar um item na lista e ficar como principal Carga Horária

function selecionar_carga_horaria(itemName) {
    
    document.getElementById("dropdownButtonText_Carga_Horaria").innerText = itemName;
    
    document.getElementById("carga_horaria").classList.remove('show');
}

function selecionar_data_de_lancamento(itemName) {
    
    document.getElementById("dropdownButtonText_Data_de_Lancamento").innerText = itemName;
    
    document.getElementById("carga_horaria").classList.remove('show');
}



// Fechar o menu dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
