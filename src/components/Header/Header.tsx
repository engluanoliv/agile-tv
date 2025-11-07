import './header.scss'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import { getAvatarImage } from '@/utils/faker'
import Avatar from '../ui/Avatar/Avatar'
import GoogleLogo from '../ui/GoogleLogo/GoogleLogo'
import SearchInput from '../SearchInput/SearchInput'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

type HeaderProps = {
  showSearch?: boolean
  searchDefault?: string
}

const Header = ({ showSearch, searchDefault }: HeaderProps): JSX.Element => {
  const [value, setValue] = useState(searchDefault)
  const avatarImage = useMemo(() => getAvatarImage(), [])

  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!showSearch) {
      return
    }
    navigate(`${pathname}?q=${value}`, { replace: true })
  }, [value, showSearch, pathname, navigate])

  return (
    <header className='header'>
      <div className='header__inner'>
        {!showSearch ? (
          <h1 className='header__brand'>
            <strong>Agile Content </strong>
            Frontend test
          </h1>
        ) : (
          <div className='header__logoSearch'>
            <GoogleLogo />
            <SearchInput value={value || ''} setValue={(e) => setValue(e)} />
          </div>
        )}
        <div className='header__menu'>
          <AppsRoundedIcon />
          <Avatar className='header__avatar' src={avatarImage} />
        </div>
      </div>
    </header>
  )
}

export default Header
