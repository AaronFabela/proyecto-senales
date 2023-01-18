import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/NoRegistrados/Home/Home'
import { AuthProvider } from './context/AuthProvider'
import RequireAuth from './components/RequireAuth'
import Login from './pages/NoRegistrados/Login/Login'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />

          <Route
            path='/*'
            element={
              <RequireAuth>
                <App />
              </RequireAuth>
            }
          />
          {/* <Route path='/*' element={<App />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
