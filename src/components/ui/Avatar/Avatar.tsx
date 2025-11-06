import type React from 'react'

type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement>

const Avatar = ({ ...props }: AvatarProps): JSX.Element => {
  return <img {...props} alt='Avatar' className='header__avatar' />
}

export default Avatar
