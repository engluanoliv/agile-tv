import type { ReactNode } from 'react'
import DialogProvider from './DialogProvider'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DialogProvider />
      {children}
    </>
  )
}

export default Providers
