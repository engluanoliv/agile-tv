import './listFakeItems.scss'
import type { FakerItem } from '@/types/faker-types'

type ListFakeItemsProps = {
  results: FakerItem[]
}

const ListFakeItems = ({ results }: ListFakeItemsProps): JSX.Element => {
  return (
    <ul className='list'>
      {results.map((item) => (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <li
          key={item.id}
          className='list__item'
          onClick={() => console.log(item)}
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
