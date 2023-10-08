'use client';

import ListTodos from '@/components/ListTodos'
import ThemeButton from '@/components/ThemeButton';
import Form from '@/components/Form';
import useTodos from '@/hooks/useTodos';

export default function Home() {
  const [createTodo, inputRef, filteredTodos, changeStateTodo, removeTodo, changeFilter, clearCompletedTodos, filter] = useTodos()

  return (
    <main
      className='bg-lightImage dark:bg-darkImage flex w-full bg-cover bg-no-repeat bg-top flex-col items-center justify-between'
    >
      <section
        className='min-h-[300px] mx-2 md:mx-0 w-full md:w-[500px] pt-20 relative'
      >
        <div className='flex justify-between items-center mx-2 md:mx-0 text-white mb-10'>
          <h1 className='text-4xl font-semibold uppercase tracking-[0.3em] '>Todo</h1>
          <ThemeButton />
        </div>
        <Form createTodo={createTodo} inputRef={inputRef} />

        <ListTodos
          todos={filteredTodos}
          changeStateTodo={changeStateTodo}
          handleRemoveTodo={removeTodo}
          filterTodos={filteredTodos}
          changeFilter={changeFilter}
          clearCompletedTodos={clearCompletedTodos}
          filterCategory={filter}
        />

      </section>
    </main>
  )
}
