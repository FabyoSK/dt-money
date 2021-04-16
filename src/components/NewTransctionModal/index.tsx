import Modal from "react-modal";
import { Container } from "./style";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModelProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModelProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
          <h2>Cadastrar Transação</h2>
          <input placeholder="Titulo" />
          <input type="number" placeholder="Valor" />
          <input placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}