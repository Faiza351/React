import React, { useId } from 'react'

const Input = React.forwardRef(function Input(
    {
        label,
        type = "text",
        className = "input1",
        ...props
    }, ref
) {

    const id = useId()
    return (
        <div>
            {label && <label className='' htmlFor={id}>
                {label}
            </label>}

            <input 
            type={type}
            className={`${className}`}
            ref={ref}
            id={id} />
        </div>
    )
})

export default Input