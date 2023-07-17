import { BsCheckCircle } from "react-icons/bs";
import { AiFillDelete } from 'react-icons/ai';
import { GiCircle } from 'react-icons/gi'

export default function Todo({ isCompleted }) {
    return (
        <div className="py-4 px-6 flex items-center justify-between w-full text-lg">
            <div className="flex items-center">
                {isCompleted ?
                    <BsCheckCircle
                        className=" cursor-pointer text-2xl mr-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white"
                    /> :
                    <GiCircle className="cursor-pointer text-2xl mr-2 text-slate-400" />
                }
                <span className="cursor-pointer text-slate-700 text-md">Ceci est un todo</span>
            </div>
            <AiFillDelete className="cursor-pointer text-2xl text-slate-500 hover:text-red-500 transition-all duration-300" />
        </div>
    )
}
