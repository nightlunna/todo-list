import { useState } from 'react'
import './App.css'
import Item from './components/Item'

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [itens, setItens] = useState<TodoItem[]>([
    { id: 123, title: "Alface", completed: false },
    { id: 40028922, title: "Tomate", completed: true }
  ]);

  const [novoTitulo, setNovoTitulo] = useState('');

  const adicionarItem = () => {
    if (novoTitulo.trim() === '') return; 

    const novoItem: TodoItem = {
      id: Date.now(), 
      title: novoTitulo,
      completed: false
    };

    setItens([...itens, novoItem]);
    setNovoTitulo(''); 
  };

  const deletarItem = (id: number) => {
    setItens(itens.filter(item => item.id !== id));
  };

  return (
    <div style={{ maxWidth: '300px', margin: '10px auto' }}>
      <h1> Lista de tarefas </h1>
      
      <div style={{ marginBottom: '5px' }}>
        <input 
          type="text"   
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
        />
        <button onClick={adicionarItem} style={{ padding: '8px', cursor: 'pointer' }}>
          Adicionar
        </button>
      </div>

      <div style={{ textAlign: 'left' }}>
        {itens.map(item => (
          <Item 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            completed={item.completed}
            onDelete={() => deletarItem(item.id)}
          />
        ))}
      </div>

      {itens.length === 0 && <p>Nenhum.</p>}
    </div>
  )
}

export default App