import React from 'react'

const Button = ({text,styles,onclick}) => {
  return (
   <button className={`btnPrimary ${styles}`} onClick={onclick}>
     {text}
   </button>
  )
}

export default Button