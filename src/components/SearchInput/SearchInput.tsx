import './searchInput.scss'
import Input from '@/components/ui/Input'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Button from '../ui/Button'

type SearchInputProps = {
  value: string
  setValue: (value: string) => void
}

const SearchInput = ({ value, setValue }: SearchInputProps): JSX.Element => {
  return (
    <div className='search'>
      <SearchRoundedIcon className='search__inputIcon' />
      <Input
        className='search__input'
        onChange={(e) => setValue(e.target.value)}
        type='text'
        value={value}
      />
      <Button
        type='button'
        className={`search__closeIcon ${value ? 'visible' : ''}`}
        onClick={() => setValue('')}
      >
        <CloseRoundedIcon />
      </Button>
    </div>
  )
}

export default SearchInput
