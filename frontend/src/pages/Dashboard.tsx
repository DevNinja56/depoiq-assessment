import React from "react"
import AnalysisTable from "../components/AnalysisTable"
import NavBar from "../components/NavBar"

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <NavBar />
      <div className="p-6">
        <AnalysisTable />
      </div>
    </div>
  )
}

export default Dashboard
