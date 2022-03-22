// importanção do React
import React from 'react';

// importação dos componentes
import FunctionalComponent from './components/FunctionComponents';
import ClassComponents from './components/ClassComponents';

import PartOne from './components/Hooks/PartOne'

import ButtonProps from './components/Props/Component'

// componente no formato de função
const App: React.FC = () => {
  return(
    <div>
      <h1>Listando os nossos componentes</h1>
      <FunctionalComponent/>
      <ClassComponents/>
      {/* importando adicionando ao código os componentes */}
      <PartOne />

      {/*  */}
      <ButtonProps name="Botão 1" />
      <ButtonProps name="Botão 2" />

    </div>
  );
}

export default App;
// exportação