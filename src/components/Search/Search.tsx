import './Search.scss'
import Input from '@/components/ui/Input/Input'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useState, type ChangeEvent } from 'react'
import Button from '../ui/Button/Button'

const Search = (): JSX.Element => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setValue(e.target.value)
  }

  return (
    <div className='search'>
      <SearchRoundedIcon className='search__inputIcon' />
      <Input
        className='search__input'
        onChange={(e) => handleChange(e)}
        type='text'
        value={value}
      />
      {value && (
        <Button
          type='button'
          className='search__closeIcon'
          onClick={() => setValue('')}
        >
          <CloseRoundedIcon />
        </Button>
      )}
    </div>
  )
}

export default Search
