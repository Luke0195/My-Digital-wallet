import { gapi } from 'gapi-script'
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
export const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

export const loadAuthentication = () => {
  const initClient = () => {
    gapi.auth2.init({
      clientId,
      scope: '',
    })
  }
  gapi.load('client:auth2', initClient)
}

export const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  console.log('success', res)
}
