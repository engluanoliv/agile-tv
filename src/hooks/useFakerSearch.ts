import data from '@/data/faker-data'
import type { FakerItem } from '@/types/faker-types'
import { useEffect, useState } from 'react'

export function useFakeSearch(search: string) {
  const [results, setResults] = useState<FakerItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!search) {
      setResults([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setResults([])

    const timeout = setTimeout(() => {
      const s = search.toLowerCase()
      const filtered = data.filter(
        (item) =>
          item.title.toLowerCase().includes(s) ||
          item.type.toLowerCase().includes(s),
      )
      setResults(filtered)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [search])

  return { results, isLoading }
}
