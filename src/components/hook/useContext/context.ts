import { createContext, useContext } from "react";
import {User} from './Main'

export const DashboardContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
    const user = useContext(DashboardContext)
    if (user === undefined) {
        throw new Error ('useUserContext должен использоваться с DashboardContext')
    }
    return user;
}