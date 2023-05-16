const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoSol = document.querySelector(".imagem-botao");


botaoAlterarTema.addEventListener("click", () => {
    const ModoClaro = (body.classList.contains("modo-claro"));
    if(ModoClaro){
        body.classList.remove("modo-claro")
        imagemBotaoSol.setAttribute("src","./assets/sun.png");
        imagemBotaoSol.setAttribute("alt","ícone para alterar para modo claro");


    }
    else{
        body.classList.add("modo-claro");
        imagemBotaoSol.setAttribute("src","./assets/moon.png");
        imagemBotaoSol.setAttribute("alt","ícone para alterar para modo escuro");
        } 
    });   
    
    document.getElementById("tipo-pokemon").addEventListener("change", function() {
        var tipoSelecionado = this.value.toLowerCase();
        var cartoesPokemon = document.querySelectorAll(".cartao-pokemon");
    
        cartoesPokemon.forEach(function(cartao) {
          var tiposPokemon = cartao.querySelectorAll(".tipo");
          var pokemonVisivel = false;
    
          tiposPokemon.forEach(function(tipo) {
            if (tipo.classList.contains(tipoSelecionado)) {
              pokemonVisivel = true;
            }
          });
    
          if (tipoSelecionado === "" || pokemonVisivel) {
            cartao.classList.add("pokemon-visivel"); // Adiciona a classe para exibir o cartão
          } else {
            cartao.classList.remove("pokemon-visivel"); // Remove a classe para ocultar o cartão
          }
        });
      });


      window.addEventListener("load", function() {
        var cartoesPokemon = document.querySelectorAll(".cartao-pokemon");
        cartoesPokemon.forEach(function(cartao) {
          cartao.classList.add("pokemon-visivel");
        });
      });