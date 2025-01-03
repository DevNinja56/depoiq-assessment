import { Topic } from "../interface"

const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/api/v1" || ""

// Unified error handler
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || `Error: ${response.statusText}`)
  }
  const data = await response.json()
  return data.data
}

// Fetch all topics
export const fetchTopics = async (): Promise<Topic[]> => {
  try {
    const response = await fetch(`${BASE_URL}/topics`)
    return await handleResponse(response)
  } catch (error) {
    console.error("Error fetching topics:", error)
    throw error
  }
}

// Add a new topic
export const addTopic = async (data: { title: string; description: string }): Promise<Topic> => {
  try {
    const response = await fetch(`${BASE_URL}/topics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return await handleResponse(response)
  } catch (error) {
    console.error("Error adding topic:", error)
    throw error
  }
}
