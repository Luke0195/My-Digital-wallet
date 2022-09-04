import React, { useState } from 'react'
import Dashboard from '../../../pages/Dashboard'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import * as S from './styles'
import DashboardContext from '../context/index'

const Main = () => {
  const [storagedUser, setStoragedUser] = useState(() => {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    }
    return {}
  })
  const [openSideBar, setOpenSideBar] = useState<boolean>(false)

  return (
    <DashboardContext.Provider
      value={{
        user: storagedUser,
        openSideBar,
        setOpenSideBar,
      }}
    >
      <S.Container>
        <Header />
        <SideBar />
        <S.Content>
          <Dashboard />
        </S.Content>
      </S.Container>
    </DashboardContext.Provider>
  )
}

export default Main
