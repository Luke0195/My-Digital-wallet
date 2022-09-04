import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

import { auth } from '../../../services/fireabase'

export const logOut = async (): Promise<any> => {
  return signOut(auth)
}

export const signIn = async (): Promise<any> => {
  const googleAuthProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleAuthProvider)
}
