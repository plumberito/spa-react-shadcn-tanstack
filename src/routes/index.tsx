import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center">
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
    </div>
  )
}
