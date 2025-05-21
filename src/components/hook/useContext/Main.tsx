import { useState } from "react"
import {Dashboard } from './Dashboard'
import { DashboardContext } from "./context"

export interface User {
    name: string,
    isSubscribed: boolean,
}
interface DemoProprs {}
export const Demo = ({}: DemoProprs) => {
    const [user] = useState<User>({
        name: 'You',
        isSubscribed: true
    })
    return(
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
           
        </div>
    )
}