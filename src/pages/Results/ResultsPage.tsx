import ListFakeItems from '@/components/ListFakeItems/LisktFakeItems'
import './resultsPage.scss'
import Header from '@/components/Header/Header'
import type { FakerItem } from '@/types/faker-types'
import { useSearchParams } from 'react-router'
import FakeItemCard from '@/components/FakeItemCard/FakeItemCard'
import { useDialog } from '@/hooks/useDialog'
import ListFakeItemsSkeleton from '@/components/ListFakeItemSkeleton/ListFakeItemsSkeleton'
import StateMessage from '@/components/StateMessage/StateMessage'
import { useFakeSearch } from '@/hooks/useFakerSearch'
import { useEffect, useState } from 'react'

const ResultsPage = (): JSX.Element => {
  const [params] = useSearchParams()
  const search = params.get('q') ?? ''

  const { results, isLoading } = useFakeSearch(search)

  const [selectedItem, setSelectedItem] = useState<FakerItem | null>(null)
  const [showCard, setShowCard] = useState(false)
  const { onOpen } = useDialog()

  const handleSelect = (item: FakerItem) => {
    setSelectedItem(item)
    setShowCard(true)
    onOpen('fakerItemDialog', { item })
  }

  useEffect(() => {
    if (!search) {
      setSelectedItem(null)
      setShowCard(false)
    }
  }, [search])

  return (
    <div className='results'>
      <Header showSearch searchDefault={search} />
      <main className='results__main'>
        {isLoading && <ListFakeItemsSkeleton />}

        {!isLoading && !search && <StateMessage />}

        {!isLoading && search && !results.length && (
          <StateMessage value={search} />
        )}

        {!isLoading && results.length > 0 && (
          <ListFakeItems
            onSelectedItem={handleSelect}
            selectedItem={selectedItem}
            results={results}
          />
        )}

        {selectedItem && showCard && <FakeItemCard item={selectedItem} />}
      </main>
    </div>
  )
}

export default ResultsPage
