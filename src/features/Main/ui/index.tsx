import React from 'react'
import Dashboard from '../../../pages/Dashboard'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import * as S from './styles'

const Main = () => {
  return (
    <S.Container>
      <Header />
      <SideBar />
      <S.Content>
        <Dashboard />
      </S.Content>
    </S.Container>
  )
}

export default Main
