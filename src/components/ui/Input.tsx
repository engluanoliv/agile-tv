import type React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...props }: InputProps): JSX.Element => {
  return <input {...props} />
}

export default Input
