'use client'

import { BsCheckCircle } from "react-icons/bs";
import { AiFillDelete } from 'react-icons/ai';
import { GiCircle } from 'react-icons/gi'

export default function Todo({ id, isCompleted, title, changeStateTodo, RemoveTodo }) {
    const style = `${isCompleted ? 'text-slate-400 dark:text-slate-500 ' : 'text-slate-700 dark:text-slate-200 '} 'cursor-pointer text-md'`

    return (
        <li className="py-4 px-6 bg-slate-100 dark:bg-bgDarkSecondary flex items-center justify-between w-full text-lg first:rounded-t-lg last:rounded-b-none">
            <div className="flex items-center">
                {isCompleted ?
                    <BsCheckCircle
                        onClick={() => changeStateTodo(id)}
                        className=" cursor-pointer text-2xl mr-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white dark:text-transparent"
                    /> :
                    <GiCircle onClick={() => changeStateTodo(id)} className="cursor-pointer text-2xl mr-2 text-slate-400" />
                }
                <h2 className={style}>{title} </h2>
            </div>
            <AiFillDelete onClick={() => RemoveTodo(id)} className="cursor-pointer text-2xl text-slate-500 hover:text-red-500 transition-all duration-300" />
        </li>
    )
}
