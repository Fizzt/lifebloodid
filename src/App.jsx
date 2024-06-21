// eslint-disable-next-line no-unused-vars
import React from 'react'
import Login from './auth/login/Login'
// import Daftar from './auth/daftar/Daftar'
import Riwayat from './pages/Riwayat/Riwayat'

function App() {
  return (
    <>
      <Route path="login" element={<Login/>} />
      {/* <Daftar /> */}
      <Route path="riwayat" element={<Riwayat />} />
    </>
  )
}

export default App