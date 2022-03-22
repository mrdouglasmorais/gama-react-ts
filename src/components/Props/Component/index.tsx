import React from 'react';
// importação do React

interface IButtonProps{
  name: string;
}

const Button: React.FC<IButtonProps> = ({name} : IButtonProps) => {
  // estamos informando nosso componente que recebemos uma props
  // mas no fim das contas o que é uma props?
  // uma propriedade passado de um componente para o outro.
  return (
    <div>
      <button onClick={() => alert(name)}>{name}</button>
    </div>
  );
}

export default Button;