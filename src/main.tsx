import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Contact from "./pages/Contact.tsx"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Contact />} />
          </Routes>
      </Router>

  </StrictMode>,
)
