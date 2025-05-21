import {Profile, Sidebar} from './Components'

interface DashboardProps{
}

export const Dashboard = ({}: DashboardProps) => {
    return( 
        <div>
            <Profile />
            <Sidebar />
        </div>
    )
}