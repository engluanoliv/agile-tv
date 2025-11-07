import { faker } from '@faker-js/faker'

const getImage = () =>
  faker.image.urlLoremFlickr({ category: 'animals', width: 644, height: 362 })

const getType = () => faker.animal.type()

const getUrl = () => faker.internet.url()

const getText = () => faker.lorem.sentences()

const getTitle = (type: string) => `${faker.word.adjective()} ${type}`

const getAvatarImage = () => faker.image.avatar()

export { getImage, getType, getUrl, getText, getTitle, getAvatarImage }
