import { useState } from "react";

const App = () => {
  const [tipo, setTipo] = useState("P");

  return (
    <>
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
    </>
  );
};

export default App;
