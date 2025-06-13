# Tutorial para Atividade 1

O tutorial faz referência a pergunta "How do you test for the non-existence of an element using jest and react-testing-library?" encontrada originalmente no [Link no Stackoverflow](https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing).

**Integrantes do grupo:**
- Edgar de Souza Dias
- Isaac Levi Lira de Oliveira
- José Matheus Ribeiro dos Santos
- Leonardo Alexandre de Souza Barreto
- Ulisses de Jesus Cavalcante

## Etapa 1

Para este tutorial, consideraremos o [Stack Overflow](https://stackoverflow.com/questions) como nossa biblioteca de perguntas e respostas sobre desenvolvimento e programação. Nesse sentido, assumindo o objetivo de encontrar uma pergunta sobre um problema relacionado a testes de unidade com pelo menos uma resposta aceita e no mínimo 400 votos, seguiremos os passos descritos a seguir.

### Elaboração da busca

Inicialmente, após acessar a página de perguntas da biblioteca, utilizaremos a barra de busca para inserir os termos relacionados ao conteúdo desejado. Considerando o nosso objetivo, utilizaremos “unit” e “test” para encontrar resultados acerca de testes unitários, como demonstrado na figura abaixo.

![Captura de tela da barra de busca do Stack Overflow com os termos "unit" e "test".](public/barra-de-busca-termos.png)

Além dos termos, utilizaremos dois operadores para que a busca traga resultados específicos que satisfaçam os requisitos desejados.

| Operador | Valor | Descrição |
| --- | :---: | --- |
| `hasaccepted` | yes | Retorna apenas postagens que possuam respostas aceitas |
| `score` | 400 | Retorna apenas postagens que tenham pelo menos 400 votos |

Após unir os termos e operadores, a consulta final deve ser construída da seguinte forma:

![Captura de tela da barra de busca do Stack Overflow com os termos e operadores escolhidos.](public/barra-de-busca-final.png)

### Filtrando resultados

Com os resultados da busca em mãos, utilizaremos um filtro para ordená-los em ordem decrescente de pontuação. Para isso, clicaremos em “*More*” e, em seguida, em “*Score*”, como destacado abaixo.

![Captura de tela com a sequência de filtros utilizados no Stack Overflow.](public/sequencia-de-filtros.png)

Após aplicar o filtro, escolha uma das perguntas listadas. Como foi mencionado anteriormente, para este trabalho, escolhemos a pergunta [“*How do you test for the non-existence of an element using jest and react-testing-library?*"](https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing).

## Etapa 2

### Descrição do problema

O problema do usuário consiste em descobrir como fazer um teste unitário que verifique que a partir do estado de propriedades ou eventos um componente não está sendo renderizado em uma aplicação baseada na biblioteca `ReactJS` usando os frameworks `Jest` e a biblioteca `React-Testing-Library`.

Durante a questão ele cita sobre o uso dos métodos `getByText` e `getByTestId` que lançam erros imediatamente caso o elemento não seja encontrado. Como um erro é lançado, a execução do teste é interrompida no ponto em que a função falha. O `expect`, usado para verificar a não existência do elemento nunca é alcançado, e o teste falha com uma mensagem de erro indicando que o elemento não pôde ser encontrado, em vez de ser confirmado que ele não existe.

Portanto, para a criação do cenário da questão, foi criado um componente de formulário com 3 (três) campos, "tipo", "habilidades" e "formação". O campo de "tipo" é uma caixa de seleção (`select`) e os demais são campos de entrada (`inputs`). O campo de seleção permite a escolha entre as opções de "Professor" e "Funcionário". A alteração nesse campo provoca mudanças de renderização nos demais campos. Quando a opção "Professor" é selecionada, o campo de "formação" é renderizado e o de "habilidades" não é, ao mesmo passo que, quando a opção "Funcionário" é selecionado, o campo de "habilidades" é exibido e o de "formação" não é.

Com algumas configurações omitidas para maior clareza, segue abaixo a configuração do cenário:

```js
const App = () => {
  const [tipo, setTipo] = useState("P");

  return (
    <form>
      <div>
        <label htmlFor="tipo">Tipo: </label>
        <select id="tipo" onChange={(e) => setTipo(e.target.value)}>
          <option value="P">Professor</option>
          <option value="F">Funcionário</option>
        </select>
      </div>
      {tipo == "P" ? (
        <div>
          <label htmlFor="formacao">Formação: </label>
          <input
            id="formacao"
            type="text"
            placeholder="Digite a formação do professor"
          />
        </div>
      ) : (
        <div>
          <label htmlFor="habilidades">Habilidades: </label>
          <input
            id="habilidades"
            type="text"
            placeholder="Digite as habilidades do funcionário"
          />
        </div>
      )}
    </form>
  );
};
```

É importante notar que o problema não consiste em verificar se o elemento não está visível para o usuário, mas sim se ele existe ou não no DOM. Portanto, um cenário em que um elemento fica invisível (por exemplo, usando `display: none` na estilização) devido à alteração de uma propriedade ou evento não consiste no objetivo da pergunta do usuário.

### Solução do problema a partir da resposta escolhida



## Análise das demais respostas

O processo para escolher as demais alternativas de respostas para este documento não foi o número de votos, e sim o quão significativa a sua análise será para o entendimento do problema do autor da pergunta.

### 1. Use queryBy / queryAllBy. - 104 Votos
![Captura de tela da primeira resposta.](public/Resposta-errrada1.png)

Esta resposta está em segundo lugar dentre as escolhidas, porém alguns usuários acreditam que ela deveria ser a resposta aceita. Ela tem um caráter menos prático e mais conceitual, explicando que a função que o autor da pergunta utilizou, a `getBy` lança um error se o objeto que ele quer observar na página não foi encontrado, e então ofereceu as alternativas `queryBy` e `queryAllBy`.

### 2. GetBy* throws an error when not finding an elements, so you can check for that - 38 Votos

![Captura de tela da segunda resposta.](public/Resposta-errrada2.png)

Esta resposta está tecnicamente correta, mas não responde a pergunta do usuário e nem explica como pode resolvê-la. Ele apenas atesta que a função `getBy` lança um erro quando não encontra os elementos que está procurando e utiliza a função de depuração para o propósito de verificação, o que não é uma boa prática e pode levar a erros.

### 3. Another solution: you could also use a try/catch block - 13 Votos

![Captura de tela da terceira resposta.](public/Resposta-errrada3.png)

Este usuário sugere uma abordagem com `try`/`catch`, essa alternativa é desnecessariamente complexa, uma vez que o react-testing-library oferece funções simples e diretas para verificar a não existência de elementos. Além disso, o uso de `try`/`catch` pode levar a múltiplas expectativas sendo executadas, o que pode causar confusão e erros.

### 4. The default behavior of queryByRole is to find exactly one element. If not, it throws an error. So if you catch an error, this means the current query finds 0 element - 8 Votos

![Captura de tela da quarta resposta.](public/Resposta-errrada4.png)

Esta resposta é a mais errônea entre as alternativas. Ele explica que o comportamento do `queryByRole` é encontrar exatamente um elemento, e, se não, lança um erro, e que o `getByRole` retorna null caso não encontre nada. A explicação das funções está invertida, o que pode induzir ao erro qualquer pessoa sem o conhecimento necessário. Além de utilizar métodos desnecessariamente complicados como as funções `expect()` e `toThrow()`.
