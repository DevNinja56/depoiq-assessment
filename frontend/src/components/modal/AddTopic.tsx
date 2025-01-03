import { Button, Form, Input, Modal, notification } from "antd"
import { useMutation } from "@apollo/client"
import { ADD_TOPIC } from "../../graphql/mutations"
import { GET_TOPICS } from "../../graphql/queries"

interface AddTopicModalProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

const AddTopicModal = ({ isModalOpen, setIsModalOpen }: AddTopicModalProps) => {
  const [form] = Form.useForm()

  // Define the mutation with Apollo's useMutation hook
  const [addTopic, { loading }] = useMutation(ADD_TOPIC, {
    refetchQueries: [{ query: GET_TOPICS }] // Automatically refetch topics after adding
  })

  // Handle form submission
  const handleSubmit = async (values: { title: string; description: string }) => {
    try {
      await addTopic({
        variables: {
          title: values.title.trim(),
          description: values.description.trim()
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
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddTopicModal
