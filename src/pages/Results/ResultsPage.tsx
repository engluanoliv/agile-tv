import Header from '@/components/Header/Header'
import { useSearchParams } from 'react-router'

const ResultsPage = (): JSX.Element => {
  const [params] = useSearchParams()
  const search = params.get('q') ?? ''

  return (
    <div className='results'>
      <Header showSearch />
    </div>
  )
}

export default ResultsPage
