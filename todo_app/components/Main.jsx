'use client'
import React from 'react'

import ListTodos from '@/components/ListTodos'
import ThemeButton from '@/components/ThemeButton';
import Form from '@/components/Form';
import useTodos from '@/hooks/useTodos';

export default function Main() {
    const [createTodo, inputRef, filteredTodos, changeStateTodo, removeTodo, changeFilter, clearCompletedTodos, filter] = useTodos()

    return (
        <>
            <section
                className='min-h-[300px] px-2 md:mx-0 w-full md:w-[500px] pt-20 relative'
            >
                <div className='flex justify-between items-center md:mx-0 text-white mb-10'>
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
        </>
    )
}
