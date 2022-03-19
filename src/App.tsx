// importanção do React
import React from 'react';

// importação dos componentes
import FunctionalComponent from './components/FunctionComponents';
import ClassComponents from './components/ClassComponents';

// componente no formato de função
const App: React.FC = () => {
  return(
    <div>
      <h1>Listando os nossos componentes</h1>
      <FunctionalComponent/>
      <ClassComponents/>
      {/* importando adicionando ao código os componentes */}
    </div>
  );
}

export default App;
// exportação