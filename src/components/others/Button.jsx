import React from 'react'

function Button(props) {
    const { className, type, onSubmit, content , onClick}=props
  return (

   <button className={className} type={type} onSubmit={onSubmit} onClick={onClick} >
    {content}
    </button>
   
  )
}

export default Button
