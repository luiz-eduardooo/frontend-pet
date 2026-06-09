import { Router } from "./app/routes/Router"
import { AuthProvider } from "./shared/contexts/AuthContext"
import { ToastProvider } from "./shared/components/Toast"

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </AuthProvider>
  )
}

export default App