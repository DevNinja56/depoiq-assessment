import { createRoot } from "react-dom/client"
import "./styles/global.css"
import App from "./App.tsx"
import { ClerkProvider } from "@clerk/clerk-react"
import { ApolloProviderWrapper } from "./apollo/ApolloProviderWrapper.tsx"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <ApolloProviderWrapper>
      <App />
    </ApolloProviderWrapper>
  </ClerkProvider>
)
