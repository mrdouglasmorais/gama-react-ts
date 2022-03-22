import React from 'react';

// import { Container } from './styles';

const Contato: React.FC = () => {
  return (
    <form>
      <input type="text" placeholder="Informe seu nome"/>
      <input type="text" placeholder="Informe seu email"/>
      <input type="text" placeholder="Informe seu telefone"/>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Contato;