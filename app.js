function pesquisar() {
  
    // Obtém a seção HTML com o ID "resultados-pesquisa" para inserir os resultados.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada 
    if (!campoPesquisa){
      section.innerHTML = "<p>Nenhum resultado encontrado! Digite algo.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento do array 'dados'.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Concatena HTML para cada resultado, formatando o título, descrição e link.
      // se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
       
      
    }
    
    if(!resultados){
      resultados = "<p>Nenhum resultado encontrado!</p>"
    }
    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
  }
