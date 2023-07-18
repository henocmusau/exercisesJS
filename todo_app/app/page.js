'use client';
import { useRef, useState } from 'react';

import Image from 'next/image'

import { BsMoonFill } from 'react-icons/bs'
import bg from '../assets/imgs/bg1.jpg'
import ListTodos from '@/components/ListTodos'
import { stringify } from 'postcss';

const Todos = [
  {
    id: 1,
    title: 'Create a new todo',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Create a new todo',
    isCompleted: false
  }
]

export default function Home() {
  const [todos, setTodos] = useState(Todos)
  const inputRef = useRef()

  function createTodo(e) {
    e.preventDefault()

    const newTodo = {
      id: todos.length + 1,
      title: inputRef.current.value,
      isCompleted: false
    }

    setTodos([...todos, newTodo])

    console.log(inputRef.current.value)
    inputRef.current.value = ''
    console.log(JSON.stringify(newTodo))
  }

  function changeStateTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }
        return todo
      }))
  }

  function removeTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter(todo => todo.id !== id))
    console.log('Removed')
  }

  return (
    <main
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="flex w-full bg-cover bg-no-repeat bg-top flex-col items-center justify-between"
    >
      <section
        className='min-h-[300px] w-[500px] pt-20 relative'
      >
        <div className='flex justify-between items-center text-white mb-10'>
          <h1 className='text-4xl font-semibold uppercase tracking-[0.3em] '>Todo</h1>
          <BsMoonFill className='text-2xl' />
        </div>
        <form className='w-full' method='POST' onSubmit={createTodo}>
          <input ref={inputRef} type='text' placeholder='Create a new todo' name='todo' className='w-full rounded py-2 px-1 text-lg' />
        </form>
        <div className="w-[500px] absolute mt-5 bg-slate-100 rounded-lg divide-y-2 shadow-lg">
          {
            todos && todos.length <= 0 ?
              <span className='px-4 py-2 text-slate-500 inline-block rounded-md'>No todo here. Create one !</span>
              : <ListTodos todos={todos} changeStateTodo={changeStateTodo} handleRemoveTodo={removeTodo} />
          }
        </div>
      </section>
    </main>
  )
}
