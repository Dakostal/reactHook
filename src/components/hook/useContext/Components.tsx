import { useUserContext } from "./context"

interface SidebarProps {}

interface ProfileProps {}

export const Sidebar = ({}: SidebarProps) => {
    const user = useUserContext
    return(
        <div>
            <div>{user.name}</div>
            <div>Subscription status: {user.isSubscribed}</div>
        </div>
    )
}

export const Profile = ({}: ProfileProps) => {
    const user = useUserContext
    return(
        <div>{user.name}</div>
    )
}