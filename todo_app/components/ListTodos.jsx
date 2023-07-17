import Todo from "./Todo";


export default function ListTodos() {
    return (
        <div className="w-[500px] absolute mt-5 bg-slate-100 rounded-lg divide-y-2 shadow-lg">
            <Todo isCompleted />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <div className="flex justify-between px-6 text-sm py-4 text-slate-500">
                <span>5 items left</span>
                <div className="flex gap-4">
                    <button className="hover:text-slate-900 hover:font-semibold duration-300 cursor-pointer">
                        All
                    </button>
                    <button className="hover:text-slate-900 hover:font-semibold duration-300 cursor-pointer">
                        Active
                    </button>
                    <button className="hover:text-slate-900 hover:font-semibold duration-300 cursor-pointer">
                        Completed
                    </button>
                </div>
                <button className="hover:text-slate-900 hover:font-semibold duration-300 cursor-pointer">Clear Completed</button>
            </div>
        </div>
    )
}
