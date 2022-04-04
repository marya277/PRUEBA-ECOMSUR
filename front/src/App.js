import React, { useEffect, useState } from 'react'
import "./App.css"
import GetProducts from './components/Home'

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------

  return (
    <div >
      <h1> Prueba tecnica front Ecomsur 2021</h1>
    <GetProducts/>
    </div>
  )
}

export default App
