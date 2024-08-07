import React from "react"
import { useState, useContext } from "react"
import RegisterForm from "./components/RegisterForm"
import Dashboard from "./components/Dashboard"

import { ExpenseCUFormContext } from "./context/ExpenseCUFormContext"
import ExpenseCUForm from "./components/ExpenseCUForm"

const App = () => {
    const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false)
    const ExpenseFormContext = useContext(ExpenseCUFormContext)
    // console.log(ExpenseFormContext)
    const [expenseFormData, setExpenseFormData] = useState({
        name: "",
        amount: "",
    })

    const [isUserPresent, setIsUserPresent] = useState(
        localStorage.getItem("user") ? true : false
    )

    return (
        <div className="container flex all-center">
            {!isUserPresent ? (
                <RegisterForm handleUserPresent={setIsUserPresent} />
            ) : (
                <Dashboard />
            )}
        </div>
    )
}

export default App
