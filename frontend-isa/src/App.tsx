import { useState } from 'react'
import './App.css'
import Item from './components/Item'

interface TodosItem {
  id: number;
  title: string;
  completed: boolean
}

function App() {

  const [itens]= useState<TodosItem[]>([
    {
      id: 123,
      title: "Alface",
      completed: false
    },

    {
      id: 40028922,
      title: "Tomate",
      completed: true
    },

    {
      id: 67676767667,
      title: "Cebola",
      completed: false
    }
  ])

  return (
    <>
      <h1> Lista de tarefas </h1>
      <p> Criar itens no todo-list </p>

      {itens.map(item => (
        <Item id = {item.id} title = {item.title} completed = {item.completed}/>
      ))}



    </>
  )
}

export default App
