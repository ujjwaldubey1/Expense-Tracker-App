import { createContext } from "react"
import { useUserData } from "../hooks/UserHooks"

const user = useUserData()

export const BudgetContext = createContext(user ? user.expenses : [])
