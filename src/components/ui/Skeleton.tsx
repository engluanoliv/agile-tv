import type { HTMLAttributes } from 'react'

type SkeletonProps = HTMLAttributes<HTMLDivElement>

const Skeleton = ({ ...props }: SkeletonProps): JSX.Element => {
  return <div {...props} />
}

export default Skeleton
