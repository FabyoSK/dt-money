import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>!2/02/2021</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdrawn">- R$1.000</td>
            <td>Casa</td>
            <td>5/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}