import React, { useContext, useEffect, useState } from "react"
import "../stylesheets/Dashboard.css"
import Expense from "./Expense"
import { BudgetContext } from "../context/BudgetContext"

import ExpenseCUForm from "./ExpenseCUForm"
import Summary from "./Summary"
import { useUserData } from "../hooks/UserHooks"

const Dashboard = () => {
    const budget = useContext(BudgetContext)
    const userBudget = useUserData().income
    const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false)
    // console.log(ExpenseFormContext)
    const [expenseFormData, setExpenseFormData] = useState({
        id: "",
        name: "",
        amount: "",
        action: "",
    })
    const [expenses, setExpenses] = useState(budget)
    // console.log(expenses)

    const handleAddExpnese = () => {
        setIsExpenseFormOpen(true)
        setExpenseFormData({
            id: "",
            expenseName: "",
            amount: "",
            action: "add",
        })
    }

    return (
        <BudgetContext.Provider value={{ expenses, setExpenses }}>
            {isExpenseFormOpen ? (
                <ExpenseCUForm
                    handleModal={setIsExpenseFormOpen}
                    expenseName={expenseFormData.name}
                    amount={expenseFormData.amount}
                    action={expenseFormData.action}
                    id={expenseFormData.id}
                />
            ) : (
                <div className="dashboard-container flex flex-col all-center">
                    <button
                        className="add-expense btn secondary-btn"
                        onClick={handleAddExpnese}
                    >
                        +
                    </button>

                    <Summary />

                    <section className="expense-container flex flex-col">
                        <div className="header flex">
                            <h2 className="sub-heading">Expenses</h2>
                            <div className="budget-indicator">
                                Budget Remaining:{" "}
                                <span className="amount">
                                    $
                                    {userBudget -
                                        expenses.reduce(
                                            (result, expense) =>
                                                result + Number(expense.amount),
                                            0
                                        )}
                                </span>
                            </div>
                        </div>
                        <ul className="expenses flex flex-col all-center">
                            {expenses.map(({ id, expenseName, amount }) => (
                                <Expense
                                    key={id}
                                    id={id}
                                    expenseName={expenseName}
                                    amount={amount}
                                    setIsExpenseFormOpen={setIsExpenseFormOpen}
                                    setExpenseFormData={setExpenseFormData}
                                />
                            ))}
                        </ul>
                    </section>
                </div>
            )}
        </BudgetContext.Provider>
    )
}

export default Dashboard
