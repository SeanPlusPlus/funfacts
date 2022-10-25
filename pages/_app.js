import { GlobalProvider } from '../context/GlobalState';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default App
