import React from 'react'
import * as Fi from 'react-icons/fi'
import logo from '../../../../assets/img/logo.svg'
import * as S from './styles'
import { useDashboardContext } from '../../context/index'
import useClckOutSideHook from '../../../../hooks/useClickOutSide'
const SideBar = () => {
  const { openSideBar, setOpenSideBar } = useDashboardContext()
  const sideBarRef = useClckOutSideHook(() => setOpenSideBar(false))
  return (
    <S.Container open={openSideBar} ref={sideBarRef}>
      <S.Header>
        <S.Profile>
          <h2> Minha Carteira </h2>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </S.Profile>
        <Fi.FiX size={20} color="#fff" onClick={() => setOpenSideBar(false)} />
      </S.Header>

      <h1> SideBar </h1>
    </S.Container>
  )
}

export default SideBar
