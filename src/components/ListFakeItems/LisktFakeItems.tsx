import './listFakeItems.scss'
import type { FakerItem } from '@/types/faker-types'

type ListFakeItemsProps = {
  results: FakerItem[]
  onSelectedItem: (item: FakerItem) => void
  selectedItem?: FakerItem | null
}

const ListFakeItems = ({
  results,
  onSelectedItem,
  selectedItem,
}: ListFakeItemsProps): JSX.Element => {
  return (
    <ul className='list'>
      {results.map((item) => (
        <li
          key={item.id}
          className={`list__item ${item.id === selectedItem?.id ? 'list__itemActive' : ''}`}
          onClick={() => onSelectedItem(item)}
        >
          <p className='list__itemUrl'>{item.url}</p>
          <p className='list__itemTitle'>{item.title}</p>
          <p className='list__itemDescription'>{item.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default ListFakeItems
