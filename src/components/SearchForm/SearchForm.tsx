import './searchForm.scss'

import { useState, type FormEvent } from 'react'
import Button from '../ui/Button/Button'
import { useNavigate } from 'react-router'
import SearchInput from '../SearchInput/SearchInput'

const SearchForm = (): JSX.Element => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate(`/results?q=${value}`)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <SearchInput value={value} setValue={setValue} />
      <Button
        type='submit'
        className={`form__searchButton ${value ? 'visible' : ''}`}
      >
        Buscar
      </Button>
    </form>
  )
}

export default SearchForm
