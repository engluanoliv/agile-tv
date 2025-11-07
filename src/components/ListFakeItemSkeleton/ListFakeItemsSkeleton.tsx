import './ListFakeItemsSkeleton.scss'

const ListFakeItemsSkeleton = () => {
  return (
    <ul className='listSkeleton'>
      {Array.from({ length: 10 }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <li key={i} className='listSkeleton__item'>
          <div className='listSkeleton__url' />
          <div className='listSkeleton__title' />
          <div className='listSkeleton__description' />
        </li>
      ))}
    </ul>
  )
}

export default ListFakeItemsSkeleton
