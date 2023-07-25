import { BrowserRouter as Router, Routes, Route, Navigate, Outlet   } from 'react-router-dom';

import { Header } from './components/Header/Header'
import { Login } from './components/Login/Login'
import { CalculatorManager } from './components/CalculatorManager/CalculatorManager';
import { History } from './components/History/History';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Header />}>
          <Route path="/history" element={<History />} />
          <Route path="/calculator" element={<CalculatorManager />} />
          <Route path="/" element={<Navigate to='/login' replace />} />
        </Route>
        <Route path="*" element={<Navigate to='/login' replace />} />
      </Routes>
  </Router>
  )
}

export default App
