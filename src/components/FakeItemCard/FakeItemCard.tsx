import './fakeItemCard.scss'
import type { FakerItem } from '@/types/faker-types'

type FakeItemCardProps = {
  item: FakerItem
}

const FakeItemCard = ({ item }: FakeItemCardProps): JSX.Element => {
  return (
    <div className='card'>
      <img className='card__image' src={item.image} alt='' />
      <p className='card__url'>{item.url}</p>
      <p className='card__title'>{item.title}</p>
      <p className='card__description'>{item.description}</p>
    </div>
  )
}

export default FakeItemCard
