// Função para mostrar/ocultar os ingredientes da receita
function toggleIngredientes() {
    var ingredientes = document.getElementById("ingredientes");
    if (ingredientes.style.display === "none" || ingredientes.style.display === "") {
        ingredientes.style.display = "block";
    } else {
        ingredientes.style.display = "none";
    }
}

// Função para mostrar/ocultar o modo de preparo da receita
function toggleModoPreparo() {
    var modoPreparo = document.getElementById("modo-preparo");
    if (modoPreparo.style.display === "none" || modoPreparo.style.display === "") {
        modoPreparo.style.display = "block";
    } else {
        modoPreparo.style.display = "none";
    }
}

// Adicione event listeners para os botões
document.getElementById("mostrar-ingredientes").addEventListener("click", toggleIngredientes);
document.getElementById("mostrar-modo-preparo").addEventListener("click", toggleModoPreparo);
