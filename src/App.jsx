import { useState } from "react";

const App = () => {
  const [tipo, setTipo] = useState("P");

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-secondary-subtle">
      <form className="d-flex flex-column gap-3 card p-5 w-50">
        <h2 className="text-center">Formulário de Teste</h2>
        <div>
          <label className="form-label" htmlFor="tipo">Tipo: </label>
          <select className="form-select" id="tipo" onChange={(e) => setTipo(e.target.value)}>
            <option value="P">Professor</option>
            <option value="F">Funcionário</option>
          </select>
        </div>
        {tipo == "P" ? (
          <div>
            <label className="form-label" htmlFor="formacao">Formação: </label>
            <input
              className="form-control"
              id="formacao"
              type="text"
              placeholder="Digite a formação do professor"
            />
          </div>
        ) : (
          <div>
            <label className="form-label" htmlFor="habilidades">Habilidades: </label>
            <input
              className="form-control"
              id="habilidades"
              type="text"
              placeholder="Digite as habilidades do funcionário"
            />
          </div>
        )}
        <button type="button" className="btn btn-primary ms-auto">Enviar</button>
      </form>
    </div>
  );
};

export default App;
