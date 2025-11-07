import type React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return <button {...props}>{children}</button>
}

export default Button
