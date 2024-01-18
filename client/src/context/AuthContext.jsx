import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}