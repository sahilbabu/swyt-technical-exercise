import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Categories API
export const fetchCategories = async (params?: { page?: number; limit?: number }) => {
  const response = await apiClient.get('/categories', { params })
  return response.data
}

export const createCategory = async (name: string, parentCategoryId?: number) => {
  const response = await apiClient.post('/categories', { name, parentCategoryId })
  return response.data
}

// Products API
export const fetchProducts = async (params?: { sortBy?: string; order?: string; category?: number; page?: number; limit?: number }) => {
  const response = await apiClient.get('/products', { params })
  return response.data
}

export const createProduct = async (product: { name: string; description: string; price: number; image: string; categoryId: number }) => {
  const response = await apiClient.post('/products', product)
  return response.data
}