import type { FakerItem } from '@/types/faker-types'
import { getImage, getText, getTitle, getType, getUrl } from '@/utils/faker'

const data: FakerItem[] = [...new Array(100)].map((_, index) => {
  const type = getType()
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  }
})

export default data
