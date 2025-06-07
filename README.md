# Tutorial para Atividade 1

O tutorial faz referência a pergunta "How do you test for the non-existence of an element using jest and react-testing-library?" encontrada originalmente no [Link no Stackoverflow](https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing).

**Integrantes do grupo:**
- Edgar de Souza Dias
- Isaac Levi Lira de Oliveira
- José Matheus Ribeiro dos Santos
- Leonardo Alexandre de Souza Barreto
- Ulisses de Jesus Cavalcante

## Etapa 1

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



### Análise das demais respostas