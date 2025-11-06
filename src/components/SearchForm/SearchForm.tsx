import './searchForm.scss'
import Input from '@/components/ui/Input/Input'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useState, type FormEvent } from 'react'
import Button from '../ui/Button/Button'
import { useNavigate } from 'react-router'

const Search = (): JSX.Element => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate(`/results?${value}`)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__search'>
        <SearchRoundedIcon className='form__inputIcon' />
        <Input
          className='form__input'
          onChange={(e) => setValue(e.target.value)}
          type='text'
          value={value}
        />
        <Button
          type='button'
          className={`form__closeIcon ${value ? 'visible' : ''}`}
          onClick={() => setValue('')}
        >
          <CloseRoundedIcon />
        </Button>
      </div>
      <Button
        type='submit'
        className={`form__searchButton ${value ? 'visible' : ''}`}
      >
        Buscar
      </Button>
    </form>
  )
}

export default Search
