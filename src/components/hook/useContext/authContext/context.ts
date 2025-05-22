import { createContext, useContext } from 'react'

export type User = {
    name: string
    email: string
} | null

type AuthContextType = {
    user: User
    login: () => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useUserContext = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useUserContext должен использоваться с AuthContext')
    }
    return context
}
