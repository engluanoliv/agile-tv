import './header.scss'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import { getAvatarImage } from '@/utils/faker'
import Avatar from '../ui/Avatar/Avatar'

const Header = (): JSX.Element => {
  const avatarImage = getAvatarImage()
  return (
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__brand'>
          <strong>Agile Content </strong>
          Frontend test
        </h1>
        <div className='container'>
          <AppsRoundedIcon />
          <Avatar src={avatarImage} />
        </div>
      </div>
    </header>
  )
}

export default Header
