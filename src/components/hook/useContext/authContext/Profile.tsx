import { useUserContext } from './context'

export const Profile = () => {
    const { user, login } = useUserContext()

    if (!user) {
        return (
            <div>
                <h2>Вы не авторизованы</h2>
                <button onClick={login}>Войти</button>
            </div>
        )
    }

    return (
        <div>
            <h2>Профиль</h2>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}
