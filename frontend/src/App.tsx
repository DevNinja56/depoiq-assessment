import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import ErrorBoundary from "./components/ErrorBoundary"
import { useUser } from "@clerk/clerk-react"
import Dashboard from "./pages/Dashboard"
import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"

const App: React.FC = () => {
  const { user } = useUser()

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Routes>
            {
              // Redirect to /dashboard if user is signed in
              user ? (
                <Route path="/" element={<Dashboard />} />
              ) : (
                <>
                  <Route path="/" element={<SignInPage />} />
                  <Route path="/sign-up" element={<SignUpPage />} />
                </>
              )
            }
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App