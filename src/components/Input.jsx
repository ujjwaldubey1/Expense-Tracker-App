import React from "react"
import "../stylesheets/Input.css"

const Input = ({
    label = "",
    type,
    id,
    placeholder,
    value,
    onChange,
    required = false,
}) => {
    return (
        <div className="input-wrapper flex flex-col">
            {label.length > 0 ? <label htmlFor={id}>{label}:</label> : ""}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required ? "required" : ""}
            />
        </div>
    )
}

export default Input
