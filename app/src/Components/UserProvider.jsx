import { createContext } from "react"

export const UserContext = createContext()
// eslint-disable-next-line react/prop-types
function UserProvider({children}) {
  const value = {name:"navaf"}
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
