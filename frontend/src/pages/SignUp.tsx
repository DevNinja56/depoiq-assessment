import { SignUp } from "@clerk/clerk-react"
import SpinLoader from "../components/SpinLoader"

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp fallback={<SpinLoader />} signInUrl="/" />
    </div>
  )
}

export default SignUpPage
