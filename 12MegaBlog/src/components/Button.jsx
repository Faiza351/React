import React from 'react'

function Button({children,type = 'button',className = '', ...props}) {
  return (
    <button>
        {children}
    </button>
  )
}

export default Button