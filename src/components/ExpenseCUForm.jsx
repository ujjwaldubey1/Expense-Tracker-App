import React, { useContext, useState } from "react"

import { BudgetContext } from "../context/BudgetContext"
import { useAddUserExpenses } from "../hooks/UserHooks"
import { useUpdateUserData } from "../hooks/UserHooks"

import Input from "./Input"
import "../stylesheets/RegisterForm.css"
import "../stylesheets/ExpenseCUForm.css"

const ExpenseCUForm = ({ id, expenseName, amount, action, handleModal }) => {
    const { expenses, setExpenses } = useContext(BudgetContext)

    const [name, setName] = useState(expenseName)
    const [amt, setAmt] = useState(amount)

    const handleSubmit = (e) => {
        e.preventDefault()

        const expense = {
            id: Date.now(), // Using Date cauz, its unique and as well as in future we would like to display the date of when theh expense was created :)
            expenseName: name,
            amount: amt,
        }

        // const user = JSON.parse(localStorage.getItem("user"))
        // NOTE: Since, expenses can be DUPLICATE. Therefore, didn't added the logic to avoid that.
        // user.expenses.push(expense)
        switch (action) {
            case "add":
                setExpenses((prevExpenses) => [...prevExpenses, expense])
                useAddUserExpenses(expense)
                break
            case "edit":
                let newExpenses = expenses.filter((expense) => expense.id != id)
                newExpenses = [...newExpenses, expense]
                useUpdateUserData("expenses", newExpenses)
                setExpenses(newExpenses)
                break
        }
        // setExpenses((prevExpenses) => [...prevExpenses, expense])
        // console.log(user)

        // Store user data in localStorage
        // useAddUserExpenses(expense)
        handleModal(false)
        console.log("expenses", expenses)
    }

    return (
        <section className="form-container flex flex-col">
            <button className="btn close" onClick={() => handleModal(false)}>
                x
            </button>
            <h2 className="sub-heading">Add Expense</h2>
            <form className="flex flex-col all-center" onSubmit={handleSubmit}>
                <Input
                    label={"Expense Name"}
                    id="name"
                    type="text"
                    placeholder="e.g. Trip"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    label={"Amount"}
                    type="number"
                    id="amount"
                    placeholder="e.g. 49.99"
                    value={amt}
                    onChange={(e) => setAmt(e.target.value)}
                />
                <button type="submit" className="btn main-btn">
                    Add Expense
                </button>
            </form>
        </section>
    )
}

export default ExpenseCUForm
