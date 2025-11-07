import type React from 'react'

type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement>

const Avatar = ({ ...props }: AvatarProps): JSX.Element => {
  return <img {...props} alt='Avatar' />
}

export default Avatar
