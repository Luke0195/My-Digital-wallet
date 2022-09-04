import React, { useState } from 'react'
import { Cookies } from 'react-cookie'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSpring, animated } from 'react-spring'
import { AuthenticationPayload } from '../protocols'

import logo from '../../../assets/img/logo.svg'
import * as S from './styles'
import { signIn as request } from '../services/authentication'

function Ui() {
  const navigate = useNavigate()
  const [storagedUser, setStoragedUser] = useState<AuthenticationPayload>({} as AuthenticationPayload)

  const handleSignIn = async () => {
    try {
      const { user: accessUser } = await request()

      if (accessUser) {
        await setStoragedUser((prev) => {
          ;(prev.accessToken = accessUser.accessToken),
            (prev.displayName = accessUser.displayName),
            (prev.email = accessUser.email),
            (prev.photoUrl = accessUser.photoUrl)
          return { ...prev }
        })
        toast.success('Usuário autenticado com successo!')
        await localStorage.setItem('user', JSON.stringify(storagedUser))
        navigate('home')
        console.log('User', storagedUser)
      }
    } catch (error) {
      toast.error('Erro na autenticação')
    }
  }

  return (
    <S.SingInContainer>
      <S.Wrapper>
        <S.AuthenticationArea>
          <S.Box>
            <img src={logo} alt="Simbolo de dolar" />
          </S.Box>
          <h1> Carteira Digital</h1>
        </S.AuthenticationArea>
        <S.GooglButton>
          <GoogleButton onClick={handleSignIn} />
        </S.GooglButton>
      </S.Wrapper>
    </S.SingInContainer>
  )
}

export default Ui
