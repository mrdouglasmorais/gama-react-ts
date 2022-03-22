// Importação do React
import React from 'react';

// Declarando a nossa função, pode ser formato arrow ou o convencional exemplo a baixo
// Function FunctionComponents(){ ... }
const FunctionComponents: React.FC = () => {
  const name = 'função'
  // armazenando um valor em uma string para consumir no nosso código 
  return (
    <div>
      <h2>Este componente tem formato de {name}</h2>
      {/* para utilizar valores dinâmicos informe dentro de {} */}
      <p>Acabamos de criar o nosso primeiro componente funcional</p>
    </div>
  );
}

export default FunctionComponents;