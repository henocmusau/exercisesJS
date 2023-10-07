import React from 'react'

export default function Form({ createTodo, inputRef }) {
    return (

        <form className='w-full' method='POST' onSubmit={createTodo}>
            <input
                ref={inputRef}
                type='text'
                placeholder='Create a new todo...'
                name='todo'
                className='w-full rounded p-4 text-lg dark:bg-bgDarkSecondary dark:text-slate-200'
            />
        </form>

    )
}
