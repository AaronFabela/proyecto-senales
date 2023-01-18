import { createContext, useState } from 'react'

export const AuthContext = createContext({})

const initialState = () => {
  const currentAuth = localStorage.getItem('user')
  if (currentAuth) {
    return JSON.parse(currentAuth)
  } else return {}
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
