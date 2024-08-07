import React, { useState } from "react"

import "../stylesheets/RegisterForm.css"
import Input from "./Input"

const RegisterForm = ({ handleUserPresent }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [currency, setCurrency] = useState("inr")

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            currency,
            expenses: [],
        }

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(user))
        handleUserPresent(true)
    }

    return (
        <section className="form-container flex flex-col">
            <h2 className="sub-heading">Create your Account</h2>
            <form className="flex flex-col all-center" onSubmit={handleSubmit}>
                <Input
                    label={"Name"}
                    id="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                />
                <Input
                    label={"Email"}
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                />
                <div className="input-wrapper">
                    <label htmlFor="currency">Preferred Currency:</label>
                    <select
                        name="currency"
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="inr">INR</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
                <button type="submit" className="btn main-btn">
                    Sign Up
                </button>
            </form>
        </section>
    )
}

export default RegisterForm
