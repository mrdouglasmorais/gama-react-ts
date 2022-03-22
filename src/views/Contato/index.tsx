import React, {useState, FormEvent, useCallback} from 'react';
import api from '../../services/api'

interface IDataContent{
  name: string;
  email: string;
  phone: string;
}

const Contato: React.FC = () => {
  const [data, setData] = useState<IDataContent>({} as IDataContent);

  const postData = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    api.post('', data).then(
      res => alert(res.data.message)
    )
  }, [data])

  return (
    <form onSubmit={postData}>
      <input 
        type="text" 
        placeholder="Informe seu nome"
        onChange={e => setData({...data, name: e.target.value})}
      />
      <input 
        type="text" 
        placeholder="Informe seu email"
        onChange={e => setData({...data, email: e.target.value})}
      />
      <input 
        type="text" 
        placeholder="Informe seu telefone"
        onChange={e => setData({...data, phone: e.target.value})}
      />
      <input 
        type="submit" 
        value="Enviar"
      />
    </form>
  );
}

export default Contato;