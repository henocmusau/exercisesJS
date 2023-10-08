'use client'
import StatsAndFilters from "./StatsAndFilters";
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

export default function ListTodos({ todos, changeStateTodo, handleRemoveTodo, changeFilter, clearCompletedTodos, filterCategory }) {
    return (
        <>
            <div
                className="w-full md:w-[500px] mx-2 md:mx-0 absolute mt-5 bg-slate-100 dark:bg-bgDarkSecondary rounded-lg divide-y dark:divide-gray-700 shadow-lg"
            >
                {todos && todos.length > 0 && todos.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        changeStateTodo={changeStateTodo}
                        RemoveTodo={handleRemoveTodo}
                    />
                ))}

                {todos && todos?.length < 1 ?
                    <span className='px-4 py-8 w-full mx-2 box-border flex dark:text-slate-200 rounded-md'
                    >
                        No todo here. Create one !
                    </span>
                    : null
                }
                <StatsAndFilters
                    todos={todos}
                    filters={filters}
                    changeFilter={changeFilter}
                    clearCompletedTodos={clearCompletedTodos}
                    filterCategory={filterCategory}
                />
            </div>
        </>
    )
}
