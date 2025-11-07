import './FakerItemDialog.scss'
import { useDialog } from '@/hooks/useDialog'
import Dialog from '../ui/Dialog'
import FakeItemCard from '../FakeItemCard/FakeItemCard'

const FakerItemDialog = (): JSX.Element => {
  const { onClose, isOpen, type, data } = useDialog()
  const isDialogOpen = isOpen && type === 'fakerItemDialog'
  const item = data.item

  if (!isDialogOpen) {
    return <></>
  }

  return (
    <Dialog className='fakerItemDialog' onClick={onClose}>
      <Dialog.Content className='fakerItemDialog__content'>
        <FakeItemCard item={item} />
      </Dialog.Content>
    </Dialog>
  )
}

export default FakerItemDialog
