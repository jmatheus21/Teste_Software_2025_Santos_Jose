import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("App Component", () => {

    it("verifica a renderização do campo 'Habilidades' utilizando os métodos queryByText e toBeNull", async () => {

        render(<App/>);

        // Seleciona o tipo "Professor"
        const tipoSelect = screen.getByLabelText(/Tipo:/i);
        await userEvent.selectOptions(tipoSelect, 'P');
        expect(tipoSelect.value).toBe('P');
        
        // Verifica se o campo "Habilidades" não foi renderizado quando o tipo "Professor" está selecionado
        const campoHabilidades = screen.queryByText(/Habilidades:/i);
        expect(campoHabilidades).toBeNull();

        // Troca o tipo para "Funcionário"
        await userEvent.selectOptions(tipoSelect, 'F');
        expect(tipoSelect.value).toBe('F');

        // Verifica se o campo "Habilidades" foi renderizado quando o tipo "Funcionário" está selecionado
        const campoHabilidadesDepoisDaMudancaDeTipo = screen.queryByText(/Habilidades:/i);
        expect(campoHabilidadesDepoisDaMudancaDeTipo).not.toBeNull();
    });

    it("verifica a renderização do campo 'Formação' utilizando os métodos queryByText e toBeInTheDocument", async () => {

        render(<App/>);

        // Seleciona o tipo "Funcionário"
        const tipoSelect = screen.getByLabelText(/Tipo:/i);
        await userEvent.selectOptions(tipoSelect, 'F');
        expect(tipoSelect.value).toBe('F');
        
        // Verifica se o campo "Formacão" não foi renderizado quando o tipo "Funcionário" está selecionado
        const campoFormacao = screen.queryByText(/Formação:/i);
        expect(campoFormacao).not.toBeInTheDocument();

        // Troca o tipo para "Professor"
        await userEvent.selectOptions(tipoSelect, 'P');
        expect(tipoSelect.value).toBe('P');

        // Verifica se o campo "Formacao" foi renderizado quando o tipo "Professor" está selecionado
        const campoFormacaoDepoisDaMudancaDeTipo = screen.queryByText(/Formação:/i);
        expect(campoFormacaoDepoisDaMudancaDeTipo).toBeInTheDocument();
    });
});
