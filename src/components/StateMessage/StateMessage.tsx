import './stateMessage.scss'
import { faker } from '@faker-js/faker'

type StateMessageProps = {
  value?: string
}
const StateMessage = ({ value }: StateMessageProps): JSX.Element => {
  const suggestions = Array.from({ length: 5 }, () => faker.animal.type())
  return (
    <>
      {/* {value && <p className='stateMessage'>{value}</p>} */}
      <p className='stateMessage'>
        {value && (
          <span>
            No results found for <strong>'{value}'</strong>.
          </span>
        )}
        <br />
        Try looking for: <strong>{suggestions.join(', ')}</strong>
      </p>
    </>
  )
}
export default StateMessage
