import { Route, Routes } from 'react-router'
import HomePage from '../pages/Home/Home'

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default AppRoutes
