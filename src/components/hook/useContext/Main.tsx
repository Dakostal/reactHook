import { useState } from "react"
import {Dashboard } from './Dashboard'
import { DashboardContext } from "./context"

export interface User {
    name: string,
    isSubscribed: boolean,
}
export const Demo = () => {
    const [user] = useState<User>({
        name: 'You',
        isSubscribed: true,
    })
    return(
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
           
        </div>
    )
}