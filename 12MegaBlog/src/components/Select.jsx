import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const  id = useId()
  return (
    <div className=''>
        {label && <label htmlFor={id} className=''></label>}

        <Select {...props} id ={id} ref = {ref}>

            {options?.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </Select>
    </div>
  )
}

export default React.forwardRef(Select)