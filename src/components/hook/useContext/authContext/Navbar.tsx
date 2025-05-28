import { useUserContext } from './context'

export const Navbar = () => {
    const { user, login, logout } = useUserContext()
    return (
        <div>
                {user ? (
                    <button onClick={logout}>Выйти</button>
                ) : (
                    <button onClick={login}>Войти</button>
                )}
        </div>
    )
}
