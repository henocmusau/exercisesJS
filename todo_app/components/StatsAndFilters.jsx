'use client'
import React from 'react'

const classFilterButton = 'hover:text-slate-900 dark:hover:text-slate-200 hover:font-semibold duration-300 cursor-pointer'
const classActiveFilterButton = 'font-bold text-sky-600 cursor-pointer'

export default function StatsAndFilters({ todos, filters, clearCompletedTodos, changeFilter, filterCategory }) {
    return (
        <section className="flex justify-between px-6 text-sm py-4 text-slate-500">

            {/* Stats and filters */}
            <span>{todos?.length} items left</span>
            <div className="flex gap-4">
                {filters?.map(filter => (
                    <button onClick={() => changeFilter(filter.code)} key={filter.code} className={filter.code === filterCategory ? classActiveFilterButton : classFilterButton}>
                        {filter.name}
                    </button>
                ))
                }
            </div>
            <button onClick={() => clearCompletedTodos()} className="hover:text-slate-900 dark:hover:text-slate-200 hover:font-semibold duration-300 cursor-pointer">Clear Completed</button>
        </section>
    )
}
