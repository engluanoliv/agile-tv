import type { HTMLAttributes } from 'react'

type DialogRootProps = HTMLAttributes<HTMLDivElement>

const DialogRoot = ({ children, ...props }: DialogRootProps): JSX.Element => {
  return <div {...props}>{children}</div>
}

type DialogContentProps = HTMLAttributes<HTMLDivElement>

const DialogContent = ({
  children,
  ...props
}: DialogContentProps): JSX.Element => {
  return <div {...props}>{children}</div>
}

const Dialog = Object.assign(DialogRoot, {
  Content: DialogContent,
})

export default Dialog
