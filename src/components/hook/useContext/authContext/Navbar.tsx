import { useUserContext } from './context'

export const Navbar = () => {
    const { user, login, logout } = useUserContext()
    return (
        <div>
            <nav>
                <span>Привет</span>
                {user ? (
                    <div>
                        <span>привет {user.name}</span>
                        <button onClick={logout}>выйти</button>
                    </div>
                ) : (
                    <button onClick={login}>Войти</button>
                )}
            </nav>
        </div>
    )
}
