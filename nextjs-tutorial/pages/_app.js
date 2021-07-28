import Footer from '../src/components/Footer'
import Top from '../src/components/Top'
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
