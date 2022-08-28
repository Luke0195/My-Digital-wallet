import { createContext } from 'react'
import { AuthenticationPayload } from '../protocols/index'

interface SignInContextProps {
  user: AuthenticationPayload
}

const SignInContext = createContext({} as SignInContextProps)

export default SignInContext
