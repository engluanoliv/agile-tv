import type { AnimalType } from '@/types/faker-types'
import { faker } from '@faker-js/faker'

const getImage = () =>
  faker.image.urlLoremFlickr({ category: 'animals', width: 644, height: 362 })

// For a better typed structure purpose
const getType = (): AnimalType => {
  const keys = Object.keys(faker.animal) as AnimalType[]
  return faker.helpers.arrayElement(keys)
}

const getUrl = () => faker.internet.url()

const getText = () => faker.lorem.sentences()

const getTitle = (type: AnimalType) =>
  faker.animal[type] ? faker.animal[type]() : faker.animal.type()

const getAvatarImage = () => faker.image.avatar()

export { getImage, getType, getUrl, getText, getTitle, getAvatarImage }
