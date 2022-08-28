interface UserData {
  email: string
  name: string
  imgUrl: string
}

export interface AuthenticationPayload {
  accessToken: string
  profileObj: UserData
}
