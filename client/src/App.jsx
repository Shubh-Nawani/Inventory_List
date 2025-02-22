import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/Add'
import Get from './components/Get'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Add />} />
        <Route path="/get" element={<Get />} />
      </Routes>
    </Router>
  )
}

export default App
