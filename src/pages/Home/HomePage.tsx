import Footer from '@/components/Footer/Footer'
import './homePage.scss'
import Header from '@/components/Header/Header'
import Search from '@/components/SearchForm/SearchForm'
import GoogleLogo from '@/components/ui/GoogleLogo/GoogleLogo'

const HomePage = (): JSX.Element => {
  return (
    <div className='home'>
      <Header />
      <main className='home__main'>
        <GoogleLogo />
        <Search />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
