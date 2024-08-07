import React, { useContext, useState } from "react"
import { BudgetContext } from "../context/BudgetContext"
import { useUpdateUserData } from "../hooks/UserHooks"

import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md"

const Expense = ({
    id,
    expenseName,
    amount,
    setIsExpenseFormOpen,
    setExpenseFormData,
}) => {
    const { expenses, setExpenses } = useContext(BudgetContext)

    const handleEdit = (id, expenseName, amount) => {
        // console.log("id", id)
        setIsExpenseFormOpen(true)
        setExpenseFormData({ id, name: expenseName, amount, action: "edit" })
    }

    const handleDelete = (id) => {
        const newExpenses = expenses.filter((expense) => expense.id != id)
        useUpdateUserData("expenses", newExpenses)
        setExpenses(newExpenses)
    }

    return (
        <>
            <li className="expense-wrapper flex">
                <div className="expense flex">
                    <p className="name">{expenseName}</p>
                    <p className="amount">${amount}</p>
                </div>
                <div className="expense-action flex">
                    <button
                        className="btn flex all-center"
                        onClick={() => handleEdit(id, expenseName, amount)}
                    >
                        <MdOutlineModeEdit />
                    </button>
                    <button
                        className="btn flex all-center"
                        onClick={() => handleDelete(id)}
                    >
                        <MdDeleteOutline />
                    </button>
                </div>
            </li>
        </>
    )
}

export default Expense
