import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { AuthenticationPayload } from '../protocols'

import logo from '../../../assets/img/logo.svg'
import * as S from './styles'
import { loadAuthentication, clientId } from '../services/authentication'

const Ui = () => {
  const [user, setUser] = useState<AuthenticationPayload>({} as AuthenticationPayload)

  useEffect(() => {
    loadAuthentication()
  }, [])

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    //@ts-ignore
    const { accessToken, profileObj } = res as GoogleLoginResponse | GoogleLoginResponseOffline

    setUser({
      accessToken,
      profileObj: {
        email: profileObj.email,
        imgUrl: profileObj.imgUrl,
        name: profileObj.name,
      },
    })
    toast.success(`Bem vindo ${user.profileObj.name}`)
  }

  const onFailure = (err: any) => {
    toast.error('Não foi possível fazer o login')
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
          <GoogleLogin
            clientId={clientId}
            buttonText="Entrar com o Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
          />
        </S.GooglButton>
      </S.Wrapper>
    </S.SingInContainer>
  )
}

export default Ui
