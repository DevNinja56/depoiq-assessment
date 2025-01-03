import React, { useState } from "react"
import { Table, Alert, Button, Tooltip } from "antd"
import { GetTopicsQuery, Topic } from "../interface"
import { PlusOutlined } from "@ant-design/icons"
import AddTopicModal from "./modal/AddTopic"
import { useTheme } from "../context/ThemeContext"
import { useQuery } from "@apollo/client"
import { GET_TOPICS } from "../graphql/queries"
import SpinLoader from "./SpinLoader"

const AnalysisTable: React.FC = () => {
  const { isDarkMode } = useTheme()
  const { data, loading, error } = useQuery<GetTopicsQuery>(GET_TOPICS)

  const [isModalOpen, setIsModalOpen] = useState(false)

  // Open Modal
  const handleAddTopicClick = () => {
    setIsModalOpen(true)
  }

  const columns = [
    {
      width: "300px",
      title: (
        <div className="flex items-center justify-between">
          <span className={isDarkMode ? "text-gray-100" : "text-gray-800"}>Topic</span>
          <Tooltip title="Add a new topic">
            <Button
              shape="circle"
              size="small"
              icon={<PlusOutlined />}
              onClick={handleAddTopicClick}
              className={`${
                isDarkMode ? "dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 hover:dark:bg-gray-600" : ""
              }`}
            />
          </Tooltip>
        </div>
      ),
      dataIndex: "title",
      key: "title",
      render: (_: string, record: Topic) => (
        <div>
          <h4 className={isDarkMode ? "text-gray-100" : "text-gray-800"}>{record.title}</h4>
          <p className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
            {record.description || "No description provided"}
          </p>
        </div>
      )
    },
    { title: "Kathryn Murphy", dataIndex: "kathryn", key: "kathryn" },
    { title: "Courtney Henry", dataIndex: "courtney", key: "courtney" },
    { title: "Devon Lane", dataIndex: "devon", key: "devon" },
    { title: "Arlene McCoy", dataIndex: "arlene", key: "arlene" }
  ]

  if (loading) {
    return <SpinLoader />
  }
  if (error) {
    return <Alert message="Error" description={error.message} type="error" showIcon />
  }

  return (
    <div className={`p-4 rounded-lg shadow ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"}`}>
      <h1 className="text-xl font-bold mb-4">Cross Deposition Analysis</h1>
      <Table
        columns={columns}
        dataSource={data?.topics}
        rowKey="id"
        pagination={false}
        bordered
        className={`${isDarkMode ? "bg-gray-700 dark:text-gray-200 dark:border-gray-600" : "bg-white text-gray-800"}`}
      />

      {/* Modal for Adding Topic */}
      <AddTopicModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default AnalysisTable
