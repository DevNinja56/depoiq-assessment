import { SignIn } from "@clerk/clerk-react"
import SpinLoader from "../components/SpinLoader"

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn fallback={<SpinLoader />} signUpUrl="/sign-up" />
    </div>
  )
}

export default SignInPage
