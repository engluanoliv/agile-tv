import './home.scss'
import Header from '@/components/Header/Header'
import GoogleLogo from '@/components/ui/GoogleLogo/GoogleLogo'

const HomePage = (): JSX.Element => {
  return (
    <div className='home'>
      <Header />
      <main className='home__main'>
        <GoogleLogo />
      </main>
    </div>
  )
}

export default HomePage
