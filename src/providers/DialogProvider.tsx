import FakerItemDialog from '@/components/FakerItemDialog/FakerItemDialog'
import { useMountedState } from 'react-use'

const DialogProvider = () => {
  const isMounted = useMountedState()

  if (!isMounted) {
    return null
  }

  return (
    <>
      <FakerItemDialog />
    </>
  )
}

export default DialogProvider
