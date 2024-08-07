import React, { useState } from "react"
import Input from "./Input"
import { useUpdateUserData, useUserData } from "../hooks/UserHooks"
import { MdOutlineModeEdit } from "react-icons/md"
import "../stylesheets/Summary.css"

const Summary = () => {
    const [income, setIncome] = useState(
        useUserData() ? useUserData().income : 0
    )
    const [isEdit, setIsEdit] = useState(false)

    const handleIncome = (e) => {
        setIncome(e.target.value)
        useUpdateUserData("income", e.target.value)
    }

    const handleEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
        <section className="summary-container flex flex-col">
            <h2 className="sub-heading">Summary</h2>
            <ul className="summaries flex">
                <li className="summary">
                    <div
                        className="edit btn flex all-center"
                        onClick={handleEdit}
                    >
                        <MdOutlineModeEdit />
                    </div>
                    <p className="title">Monthly Income:</p>
                    {isEdit ? (
                        <Input
                            type={"number"}
                            id={"income"}
                            value={income}
                            onChange={handleIncome}
                            placeholder={"e.g. 5000"}
                        />
                    ) : (
                        <h3 className="amount">{income}</h3>
                    )}
                </li>
            </ul>
        </section>
    )
}

export default Summary
