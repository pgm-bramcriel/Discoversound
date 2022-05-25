import { PlayedContext } from '../context/PlayedContext'
import '../styles/globals.css'
import {useState} from 'react';

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState(false)

  return (
    <PlayedContext.Provider value={{value, setValue}}>
      <Component {...pageProps} />
    </PlayedContext.Provider>
  )
}

export default MyApp
