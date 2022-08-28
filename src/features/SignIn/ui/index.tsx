import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import logo from '../../../assets/img/logo.svg'
import * as S from './styles'

const Ui = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId,
        scope: '',
      })
    }
    gapi.load('client:auth2', initClient)
  }, [])

  const onSucess = (res: any) => {
    console.log('success', res)
  }

  const onFailure = (err: any) => {
    console.log('failed', err)
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
            onSuccess={onSucess}
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
