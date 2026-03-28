import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [count, setCount] = useState(0)

  function handleClick() {
    const labels = ['first', 'second', 'third']
    setCount(count + 1)
    const label = labels[count].toUpperCase()
    console.log(`Click ${label}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <div
          className="border-4 border-[#1e1b13] px-16 py-10"
          style={{ boxShadow: '8px 8px 0px 0px #1e1b13' }}
        >
          <h1
            className="text-[7rem] leading-none font-black uppercase tracking-tighter text-[#1e1b13] select-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            PLUMBERITO
          </h1>
        </div>
        <button
          onClick={handleClick}
          className="border-4 border-[#1e1b13] bg-[#1e1b13] px-8 py-4 text-2xl font-bold text-white uppercase tracking-wider transition-all hover:bg-transparent hover:text-[#1e1b13] select-none"
          style={{ boxShadow: '6px 6px 0px 0px #1e1b13', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}
