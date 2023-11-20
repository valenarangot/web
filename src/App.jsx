
import './App.css'
import { AppRouter } from './AppRouter'
import { AuthContextProvider } from './auth/context/AuthContextProvider'

function App() {
  
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  )
}

export default App
