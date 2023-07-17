import Image from 'next/image'

import { BsMoonFill } from 'react-icons/bs'
import bg from '../assets/imgs/bg1.jpg'

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="flex w-full bg-cover bg-no-repeat bg-top flex-col items-center justify-between"
    >
      <section
        className='min-h-[300px] w-[500px] pt-20 border border-blue-50'
      >
        <div className='flex justify-between items-center text-white mb-10'>
          <h1 className='text-4xl font-semibold uppercase tracking-[0.3em] '>Todo</h1>
          <BsMoonFill className='text-2xl' />
        </div>
        <div className='w-full'>
          <input type='text' placeholder='Create a new todo' name='todo' className='w-full rounded py-2 px-1 text-lg' />
        </div>
      </section>
    </main>
  )
}
