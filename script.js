//Lista com pergutas e respostas
const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
      "Uma linguagem de programação para desenvolvimento web.",
      "Um software de edição de texto.",
      "Um sistema operacional."
      ],
      correta: 0
      },
      {
      pergunta: "Qual é a sintaxe básica para declarar uma variável em JavaScript?",
      respostas: [
      "var nomeDaVariavel;",
      "variavel = valor;",
      "define(nomeDaVariavel, valor);"
      ],
      correta: 0
      },
      {
      pergunta: "Como você escreve um comentário de linha única em JavaScript?",
      respostas: [
      "// Isso é um comentário.",
      "<!-- Isso é um comentário. -->",
      "/* Isso é um comentário. */"
      ],
      correta: 0
      },
      {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
      "Verifica igualdade estrita, comparando tanto o valor quanto o tipo de dados.",
      "Verifica se dois valores são aproximadamente iguais.",
      "Define uma atribuição de valor."
      ],
      correta: 0
      },
      {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
      "function nomeDaFuncao() {}",
      "def nomeDaFuncao() {}",
      "funcao nomeDaFuncao() {}"
      ],
      correta: 0
      },
      {
      pergunta: "Qual é o método usado para adicionar um elemento a um array em JavaScript?",
      respostas: [
      "push()",
      "add()",
      "append()"
      ],
      correta: 0
      },
      {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
      "Seleciona o primeiro elemento no documento que corresponde ao seletor especificado.",
      "Seleciona todos os elementos no documento que correspondem ao seletor especificado.",
      "Define um novo seletor para um elemento."
      ],
      correta: 0
      },
      {
      pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
      respostas: [
      "Usando o operador 'typeof'.",
      "Usando o operador 'type'.",
      "Não é possível verificar o tipo de variável em JavaScript."
      ],
      correta: 0
      },
      {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
      "Anexa um manipulador de eventos a um elemento HTML específico.",
      "Remove um manipulador de eventos de um elemento HTML específico.",
      "Adiciona um novo elemento HTML ao documento."
      ],
      correta: 0
      },
      {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
      "Formata um número utilizando um número específico de casas decimais.",
      "Arredonda um número para o inteiro mais próximo.",
      "Converte um número para uma string representando uma notação exponencial."
      ],
      correta: 0
      }
  ]
  
  //Coloca o modelo e as informações criadas em variaveis 
  //para serem manipuladas
  const template = document.querySelector('template')
  const quiz = document.querySelector('#quiz')
  const corretas = new Set()
  const Total = document.getElementById('acertos')
  const totalPerguntas= perguntas.length
  
  //Função de loop para repetir o processo com todas as peguntas na lista
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)//clona o template toda vez que a função for rodada
    quizItem.querySelector('h2').textContent = item.pergunta//define o texto de h2 com o presente na lista
  
    //Outro loop mas para as respostas
    for(const resposta of item.respostas){
      const quizResposta = quizItem.querySelector('dl dt').cloneNode(true)//procura o 'dt' dentro de 'dl' e o clona
      quizResposta.querySelector('span').textContent = resposta//Altera a clonagem definindo o texto do span para a resposta
      quizResposta.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      quizResposta.querySelector('input').value = item.respostas.indexOf(resposta)
      quizResposta.querySelector('input').onchange = (event) => {
        const isCorrect = event.target.value == item.correta
  
        corretas.delete(item)
        if(isCorrect) {
          corretas.add(item)
        }
  
        Total.textContent = corretas.size + ' de ' + totalPerguntas
      }
  
      quizItem.querySelector('dl').appendChild(quizResposta)//Troca a resposta pela definida anteriormente
    }
    
    quizItem.querySelector('dl dt').remove()//Remove a primeira resposta usada de base
  
    quiz.appendChild(quizItem)
  }