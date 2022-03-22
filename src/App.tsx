// importanção do React
import React from 'react';

// importação dos componentes
import FunctionalComponent from './components/FunctionComponents';
import ClassComponents from './components/ClassComponents';

import PartOne from './components/Hooks/PartOne'

// componente no formato de função
const App: React.FC = () => {
  return(
    <div>
      <h1>Listando os nossos componentes</h1>
      <FunctionalComponent/>
      <ClassComponents/>
      {/* importando adicionando ao código os componentes */}
      <PartOne />
    </div>
  );
}

export default App;
// exportação