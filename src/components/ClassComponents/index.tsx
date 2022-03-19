// Importação do React
import React from 'react';

class ClassComponents extends React.Component{

  // método de renderização da classe de
  render() {
    const name = 'classe'
    // armazenando um valor em uma string para consumir no nosso código
    return(
      <div>
      <h2>Este componente tem formato de {name}</h2>
      {/* para utilizar valores dinâmicos informe dentro de {} */}
      <p>Acabamos de criar o nosso primeiro componente formato de classe</p>
    </div>
    )
  }
}

export default ClassComponents;