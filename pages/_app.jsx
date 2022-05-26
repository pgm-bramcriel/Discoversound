import { PlayedContext } from '../context/PlayedContext'
import '../styles/globals.css'
import {useState} from 'react';
import { ModalContext } from '../context/ModalContext';
import { AuthContextProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState(false)
  const [modalValue, setModalValue] = useState(false)

  return (
    <AuthContextProvider>
      <PlayedContext.Provider value={{value, setValue}}>
        <ModalContext.Provider value={{modalValue, setModalValue}}>
          <Component {...pageProps} />
        </ModalContext.Provider>
      </PlayedContext.Provider>
    </AuthContextProvider>
  )
}

export default MyApp
