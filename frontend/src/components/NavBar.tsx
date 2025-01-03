import React from "react"
import { Switch } from "antd"
import { useTheme } from "../context/ThemeContext"
import { SignedIn, UserButton } from "@clerk/clerk-react"

const NavBar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="flex items-center justify-between p-6 bg-gray-100 dark:bg-gray-800 shadow">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <span className="text-lg font-bold text-gray-800 dark:text-gray-100">DepoIQ</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <div className="flex items-center space-x-2">
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            className="dark:bg-gray-700"
          />
        </div>

        {/* Profile Menu */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default NavBar
