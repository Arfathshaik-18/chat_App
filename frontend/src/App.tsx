import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/login'
import ChangePasswordPage from './pages/ChangePasswordPage'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/change-password' element={<ChangePasswordPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App