import { Router } from "./app/routes/Router"
import { AuthProvider } from "./shared/contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App