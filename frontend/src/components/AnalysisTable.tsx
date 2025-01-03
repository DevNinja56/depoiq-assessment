import React, { useState } from "react"
import { Table, Alert, Button, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { useQuery } from "@apollo/client"
import { GET_TOPICS } from "../graphql/queries"
import { useTheme } from "../context/ThemeContext"
import SpinLoader from "./SpinLoader"
import AddTopicModal from "./modal/AddTopic"
import { GetTopicsQuery, Topic } from "../interface"

const AnalysisTable: React.FC = () => {
  const { isDarkMode } = useTheme()
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  // Fetch paginated data
  const { data, loading, error, refetch } = useQuery<GetTopicsQuery>(GET_TOPICS, {
    variables: { page: currentPage, limit: pageSize }
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  // Open Modal
  const handleAddTopicClick = () => {
    setIsModalOpen(true)
  }

  // Handle table pagination change
  const handleTableChange = (
    pagination: { current?: number; pageSize?: number },
    _filters: Record<string, any>,
    _sorter: any,
    _extra: any
  ) => {
    const current = pagination.current || 1
    const pageSize = pagination.pageSize || 10
    setCurrentPage(current)
    setPageSize(pageSize)
    refetch({
      page: current,
      limit: pageSize
    })
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
        dataSource={data?.topics.data}
        rowKey="id"
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data?.topics.count,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50", "100"]
        }}
        onChange={handleTableChange}
        bordered
      />

      {/* Modal for Adding Topic */}
      <AddTopicModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} page={currentPage} limit={pageSize} />
    </div>
  )
}

export default AnalysisTable
