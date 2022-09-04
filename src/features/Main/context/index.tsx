import { createContext, useContext } from 'react'
import { AuthenticationPayload } from '../../SignIn/protocols'

interface DashboardContextProps {
  user: AuthenticationPayload
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
