import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Aulas from './pages/Aulas'
import AulaDetalhe from './pages/AulaDetalhe'
import Codigos from './pages/Codigos'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
                  <Route path="/aulas" element={<Aulas />} />
        <Route path="/aulas/:id" element={<AulaDetalhe />} />
        <Route path="/codigos" element={<Codigos />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
