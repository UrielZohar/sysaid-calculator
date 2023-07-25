import { BrowserRouter as Router, Routes, Route, Navigate, Outlet   } from 'react-router-dom';

import { Header } from './components/Header/Header'
import { Login } from './components/Login/Login'
import { Calculator } from './components/Calculator/Calculator';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Header />}>
          <Route path="/history" element={<h1>History</h1>} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Navigate to='/login' replace />} />
        </Route>
        <Route path="*" element={<Navigate to='/login' replace />} />
      </Routes>
  </Router>
  )
}

export default App
