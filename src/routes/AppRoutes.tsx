import { Route, Routes } from 'react-router'
import HomePage from '../pages/Home/HomePage'
import ResultsPage from '@/pages/Results/ResultsPage'

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/results' element={<ResultsPage />} />
    </Routes>
  )
}

export default AppRoutes
