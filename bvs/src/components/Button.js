import React from 'react'

const Button = ({text, type}) => {
  return (
    <>
        <button id="bvsBtn" className='btn' type={type}>{text}</button>
    </>
  )
}

Button.defaultProps = {
    text: "Button",
    type: "button"
}

export default Button