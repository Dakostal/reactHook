import { useState } from 'react'
import { AuthContext, User } from './context'


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<User>(null)

    const login = () => {
        setUser({ name: 'Nasos', email: 'nasosal@mail.ru' })
    }

    const logout = () => {
        setUser(null)
    }
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
