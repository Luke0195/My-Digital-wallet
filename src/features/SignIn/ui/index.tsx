import React from 'react'
import logo from '../../../assets/img/logo.svg'
import * as S from './styles'

const Ui = () => {
  return (
    <S.SingInContainer>
      <S.AuthenticationArea>
        <S.Box>
          <img src={logo} alt="Simbolo de dolar" />
        </S.Box>
        <h1> Carteira Digital</h1>
      </S.AuthenticationArea>
    </S.SingInContainer>
  )
}

export default Ui
