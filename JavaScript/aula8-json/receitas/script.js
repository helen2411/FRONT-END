
const receitas = {
    salgado: {
      coxinha: {
        ingredientes: ["massa de pastel", "frango desfiado", "requeijão", "óleo"],
        preparo: "Misturar o frango com o requeijão. Modelar a massa em formato de coxinha, rechear e fritar."
      },
      
    },
    doce: {
      bolo_chocolate: {
        ingredientes: ["farinha", "açúcar", "ovos", "leite", "chocolate", "óleo"],
        preparo: "Bater os ovos com o açúcar. Adicionar os demais ingredientes e misturar bem. Assar em forno pré-aquecido."
      },
      
    },
    suco: {
      laranja: {
        ingredientes: ["laranja", "água", "açúcar"],
        preparo: "Extrair o suco da laranja, adicionar água e açúcar a gosto."
      },
      
    }
  };


  function exibirReceitas(categoria) {
    const listaReceitas = document.getElementById('lista-receitas');
    listaReceitas.innerHTML = ''; // Limpa a lista antes de adicionar novas receitas
  
    const receitasDaCategoria = receitas[categoria];
    for (const receita in receitasDaCategoria) {
      const li = document.createElement('li');
      li.textContent = receita;
      listaReceitas.appendChild(li);
  
      // Adicionar um evento para exibir os detalhes da receita ao clicar
      li.addEventListener('click', () => {
        // Função para exibir detalhes da receita 
        exibirDetalhesReceita(receita, categoria);
      });
    }
  }

  function exibirDetalhesReceita(receita, categoria) {
    const detalhes = document.getElementById('detalhes-receita');
    detalhes.innerHTML = `
      <h2>${receita}</h2>
      <p><strong>Ingredientes:</strong> ${receitas[categoria][receita].ingredientes.join(', ')}</p>
      <p><strong>Preparo:</strong> ${receitas[categoria][receita].preparo}</p>
    `;
  }
