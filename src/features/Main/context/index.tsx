import { createContext, SetStateAction, useContext } from 'react'
import { AuthenticationPayload } from '../../SignIn/protocols'

type StateAction<T> = React.Dispatch<React.SetStateAction<T>>
interface DashboardContextProps {
  user: AuthenticationPayload
  openSideBar: boolean
  setOpenSideBar: StateAction<boolean>
}

const DashboardContext = createContext({} as DashboardContextProps)

function useDashboardContext() {
  const dashboardContext = useContext(DashboardContext)
  if (!dashboardContext) {
    throw new Error('Yout Provided the context')
  }
  return dashboardContext
}

export default DashboardContext
export { useDashboardContext }
