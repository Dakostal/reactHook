import { useUserContext } from './context'

export const Profile = () => {
    const { user } = useUserContext()

    if (!user) {
        return (
            <h2>Вы не авторизованы</h2>
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
