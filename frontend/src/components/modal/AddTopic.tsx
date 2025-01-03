import { Button, Form, Input, Modal, notification } from "antd"
import { useMutation } from "@apollo/client"
import { ADD_TOPIC } from "../../graphql/mutations"
import { GET_TOPICS } from "../../graphql/queries"

interface AddTopicModalProps {
  isModalOpen: boolean
  page: number
  limit: number
  setIsModalOpen: (isOpen: boolean) => void
}

const AddTopicModal = ({ isModalOpen, page, limit, setIsModalOpen }: AddTopicModalProps) => {
  const [form] = Form.useForm()

  // Define the mutation with Apollo's useMutation hook
  const [addTopic, { loading }] = useMutation(ADD_TOPIC, {
    refetchQueries: [{ query: GET_TOPICS, variables: { page, limit } }]
  })

  // Handle form submission
  const handleSubmit = async (values: { title: string }) => {
    try {
      if (!values.title.trim()) {
        return notification.error({ message: "Please fill out all fields" })
      }

      await addTopic({
        variables: {
          title: values.title.trim(),
          page,
          limit
        }
      })
      notification.success({ message: "Topic added successfully!" })
      setIsModalOpen(false)
      form.resetFields()
    } catch (error) {
      notification.error({
        message: "Error adding topic",
        description: (error as Error).message
      })
    }
  }

  // Close Modal
  const handleCancel = () => {
    setIsModalOpen(false)
    form.resetFields()
  }

  return (
    <Modal title="Add New Topic" open={isModalOpen} onCancel={handleCancel} footer={null} destroyOnClose>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please enter a title" }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="mt-1" htmlType="submit" loading={loading} block>
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddTopicModal
