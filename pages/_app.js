import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react'
import AppContext from '../AppContext'
import languageObject from '../languageObject' 

function MyApp({ Component, pageProps }) {
  const [lanSelected,setLanSelected]=useState("en");

  return (
    <AppContext.Provider value={{state:{
      languages:languageObject[lanSelected],
      lanSelected:lanSelected,
    },
    setLanSelected:setLanSelected,
  }}><Component {...pageProps} /></AppContext.Provider>
  )
}

export default MyApp
