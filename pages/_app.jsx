import { PlayedContext } from '../context/PlayedContext'
import '../styles/globals.css'
import {useState} from 'react';
import { ModalContext } from '../context/ModalContext';

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState(false)
  const [modalValue, setModalValue] = useState(false)

  return (
    <PlayedContext.Provider value={{value, setValue}}>
      <ModalContext.Provider value={{modalValue, setModalValue}}>
        <Component {...pageProps} />
      </ModalContext.Provider>
    </PlayedContext.Provider>
  )
}

export default MyApp
