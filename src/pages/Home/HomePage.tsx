import Footer from '@/components/Footer/Footer'
import './homePage.scss'
import Header from '@/components/Header/Header'
import SearchForm from '@/components/SearchForm/SearchForm'
import GoogleLogo from '@/components/GoogleLogo/GoogleLogo'

const HomePage = (): JSX.Element => {
  return (
    <div className='home'>
      <Header />
      <main className='home__main'>
        <GoogleLogo />
        <SearchForm />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
