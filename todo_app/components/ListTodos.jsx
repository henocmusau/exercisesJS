'use client'
import Todo from "./Todo";

const filters = [
    {
        name: 'All',
        code: 0
    },
    {
        name: 'Active',
        code: 1
    },
    {
        name: 'Completed',
        code: 2
    },
]

export default function ListTodos({ todos, changeStateTodo, handleRemoveTodo }) {
    return (
        <>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} changeStateTodo={changeStateTodo} RemoveTodo={handleRemoveTodo} />
            ))}

            <div className="flex justify-between px-6 text-sm py-4 text-slate-500">
                <span>{todos.length} items left</span>
                <div className="flex gap-4">
                    {filters.map(filter => (
                        <button key={filter.code} className="hover:text-slate-900 hover:font-semibold duration-300 cursor-pointer">
                            {filter.name}
                        </button>
                    ))
                    }
                </div>
                <button className="hover:text-slate-900 hover:font-semibold duration-300 cursor-pointer">Clear Completed</button>
            </div>
        </>
    )
}
