'use client'
import React from 'react'

const classFilterButton = 'hover:text-slate-900 dark:hover:text-slate-200 hover:font-semibold duration-300 cursor-pointer'
const classActiveFilterButton = 'font-bold text-sky-600 cursor-pointer'

export default function StatsAndFilters({ todos, filters, clearCompletedTodos, changeFilter, filterCategory }) {

    return (
        <section className="flex flex-wrap w-full md:flex-nowrap justify-between md:bg-slate-100 md:dark:bg-bgDarkSecondary md:px-6 text-sm md:py-4 text-slate-500 md:rounded-b-lg">

            {todos && todos.length > 0 ?
                <>
                    {/* Stats and filters */}
                    <p className='grow text-left py-4 md:py-0 pl-6 md:pl-0 bg-slate-100 dark:bg-bgDarkSecondary rounded-bl-lg md:rounded-bl-none'>{todos?.length} items left</p>
                    <div className="flex gap-4 order-2 md:order-none basis-full md:basis-auto justify-center mt-4 md:mt-0 p-4 md:p-0 bg-slate-100 dark:bg-bgDarkSecondary rounded-lg md:rounded-none">

                        {/* Filters */}
                        {filters?.map(filter => (
                            <button
                                key={filter.code}
                                onClick={() => changeFilter(filter.code)}
                                className={filter.code === filterCategory ? classActiveFilterButton : classFilterButton}
                            >
                                {filter.name}
                            </button>
                        ))
                        }

                    </div>

                    {/* Clear Todos Button */}
                    <button
                        onClick={() => clearCompletedTodos()}
                        className="grow text-right py-4 md:py-0 pr-6 md:pr-0 bg-slate-100 dark:bg-bgDarkSecondary rounded-br-lg md:rounded-br-none hover:text-slate-900 dark:hover:text-slate-200 hover:font-semibold duration-300 cursor-pointer"
                    >
                        Clear Completed
                    </button>
                </> : null
            }

        </section>
    )
}
