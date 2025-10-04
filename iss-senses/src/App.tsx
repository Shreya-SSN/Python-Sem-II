import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full flex flex-col">
        <header className="bg-space-800 border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6" aria-label="Primary">
            <h1 className="text-xl font-semibold">ISS Senses</h1>
            <NavLink to="/cupola" className={({isActive}) => `px-3 py-1 rounded ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>Cupola</NavLink>
            <NavLink to="/nbl" className={({isActive}) => `px-3 py-1 rounded ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>NBL</NavLink>
            <a href="#accessibility" className="ml-auto text-sm underline underline-offset-4">Accessibility</a>
          </nav>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/cupola" element={<CupolaView />} />
            <Route path="/nbl" element={<NblView />} />
          </Routes>
        </main>
        <footer className="bg-space-800 border-t border-white/10 px-4 py-3 text-center text-xs">
          Imagery data: NASA open datasets. This is an educational demo.
        </footer>
      </div>
    </BrowserRouter>
  )
}

function Landing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-2 items-center">
      <div>
        <h2 className="text-3xl font-bold">Experience the ISS</h2>
        <p className="mt-3 text-white/80">
          Explore Earth from the Cupola and feel neutral buoyancy like astronauts train in the NBL.
        </p>
        <div className="mt-6 flex gap-3">
          <NavLink to="/cupola" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20">Start Cupola</NavLink>
          <NavLink to="/nbl" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20">Start NBL</NavLink>
        </div>
      </div>
      <div className="aspect-video rounded-lg bg-gradient-to-br from-space-700 to-space-900 grid place-items-center">
        <span className="text-white/60">Visual preview coming soon</span>
      </div>
    </section>
  )
}

function CupolaView() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 grid gap-6 lg:grid-cols-[360px,1fr]">
      <aside className="bg-space-800/60 rounded-lg p-4 border border-white/10" aria-label="Astronaut customization">
        <h3 className="font-semibold">Astronaut</h3>
        <AstronautCustomizer />
      </aside>
      <div className="space-y-4">
        <EarthMapPanel />
        <RegionInfoPanel />
      </div>
    </section>
  )
}

function NblView() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 grid gap-6 lg:grid-cols-[360px,1fr]">
      <aside className="bg-space-800/60 rounded-lg p-4 border border-white/10" aria-label="Buoyancy controls">
        <h3 className="font-semibold">Neutral Buoyancy</h3>
        <BuoyancyControls />
      </aside>
      <div className="space-y-4">
        <NblPoolCanvas />
        <ScorePanel />
      </div>
    </section>
  )
}

// Stubs to be implemented
function AstronautCustomizer() { return <div className="text-white/70">Customize skin tone, suit color, patches.</div> }
function EarthMapPanel() { return <div className="h-80 rounded-lg border border-white/10 bg-space-800/40 grid place-items-center">Map placeholder</div> }
function RegionInfoPanel() { return <div className="rounded-lg border border-white/10 p-3 bg-space-800/40">Select a region to see NASA imagery and facts.</div> }
function BuoyancyControls() { return <div className="text-white/70">Adjust weight to reach neutral buoyancy.</div> }
function NblPoolCanvas() { return <div className="h-80 rounded-lg border border-white/10 bg-[linear-gradient(180deg,#0a4f6d,#083a53)] grid place-items-center">NBL task area</div> }
function ScorePanel() { return <div className="rounded-lg border border-white/10 p-3 bg-space-800/40">Score: 0</div> }

export default App
