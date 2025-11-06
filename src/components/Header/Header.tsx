import './header.scss'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import { getAvatarImage } from '@/utils/faker'
import Avatar from '../ui/Avatar/Avatar'
import GoogleLogo from '../ui/GoogleLogo/GoogleLogo'
import Search from '../SearchForm/SearchForm'

type HeaderProps = {
  showSearch?: boolean
  searchDefault?: string
}

const Header = ({ showSearch }: HeaderProps): JSX.Element => {
  const avatarImage = getAvatarImage()
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
            <Search />
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
