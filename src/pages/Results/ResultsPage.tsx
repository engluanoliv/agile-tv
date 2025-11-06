import ListFakeItems from '@/components/ListFakeItems/LisktFakeItems'
import './resultsPage.scss'
import Header from '@/components/Header/Header'
import data from '@/data/faker-data'
import type { FakerItem } from '@/types/faker-types'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

const ResultsPage = (): JSX.Element => {
  const [params] = useSearchParams()
  const search = params.get('q') ?? ''

  const [results, setResults] = useState<FakerItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!search) {
      return
    }

    setIsLoading(true)
    setResults([])

    const timeout = setTimeout(() => {
      const filtered = data.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.type.toLowerCase().includes(search.toLowerCase()),
      )
      setResults(filtered)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [search])

  return (
    <div className='results'>
      <Header showSearch searchDefault={search} />
      <main className='results__main'>
        {isLoading && <p>Loading results ...</p>}

        {!isLoading && !search && (
          <p className='results__stateMessage'>Start a search first.</p>
        )}

        {!isLoading && search && !results.length && (
          <p className='results__stateMessage'>No animals found.</p>
        )}

        {!isLoading && results.length > 0 && <ListFakeItems results={results} />}
      </main>
    </div>
  )
}

export default ResultsPage
