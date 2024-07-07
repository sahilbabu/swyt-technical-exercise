<template>
  <div class="container w-full md:max-w-3xl mx-auto">
    <h1 class="text-3xl md:text-4xl text-green-500 font-bold no-underline py-6">Products</h1>
    <hr class="border-b-2 border-gray-400 mb-2">
    <!--  products add form -->
    <form @submit.prevent="createProduct">
      <div class="mt-2">
        <input v-model="newProduct.name" placeholder="Product Name"
          class="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400"
          required />
      </div>
      <div class="mt-2">
        <input v-model="newProduct.description" placeholder="Product Description"
          class="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400"
          required />
      </div>
      <div class="mt-2">
        <input v-model.number="newProduct.price" placeholder="Price"
          class="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400"
          required />
      </div>
      <div class="mt-2">
        <input v-model="newProduct.image" placeholder="Image URL"
          class="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400"
          required />
      </div>
      <div class="mt-2 ">
        <select v-model.number="newProduct.categoryId"
          class="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          required>
          <option value="" disabled>Select Category</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="mt-2">
        <button
          class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4"
          type="submit">Add Product</button>
      </div>
    </form>

    <!-- Success Message -->
    <div v-if="successMessage" class="mt-4 p-2 bg-green-200 text-green-800 rounded">
      {{ successMessage }}
    </div>

    <!-- filters -->
    <hr class="border-b-2 border-gray-400 my-4">
    <div class="flex justify-between mb-4">
      <div>
        <label for="categoryFilter">Filter by Category:</label>
        <select id="categoryFilter" v-model.number="filters.category" @change="loadProducts">
          <option value="" selected>All</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="sortOrder" class="ml-4">Sort by Price:</label>
        <select id="sortOrder" v-model="filters.order" @change="loadProducts">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>


    <div class="bg-white mb-4">
      <div class="mx-auto px-4 py-4">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-3">
          <a v-for="product in products" :key="product.id" href="#" class="group">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img :src="product.image" alt=""
                class="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 class="px-2 mt-2 text-lg font-medium text-gray-900">{{ product.name }}</h3>
            <p class="px-2 mt-1 text-sm text-gray-700">{{ product.description }}</p>
            <p class="px-2 mt-1 text-lg font-medium text-gray-900">${{ product.price }}</p>
          </a>
          <!-- More products... -->
        </div>
        
      </div>
    </div>
    <!-- Pagination Controls -->
    <div class="flex justify-between my-4">
          <div>
            <button @click="prevPage" :disabled="currentPage === 1" class="text-base md:text-sm text-green-500 font-bold">Previous</button>
          </div>
          <div>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
          </div>
          <div>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="text-base md:text-sm text-green-500 font-bold">Next</button>
          </div>
        </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { fetchProducts, fetchCategories, createProduct as apiCreateProduct } from '../services/api'

const products = ref([])
const categories = ref([])
const filters = ref({
  category: null,
  order: 'asc'
})
const newProduct = ref({
  name: '',
  description: '',
  price: 0,
  image: '',
  categoryId: null
})
const successMessage = ref('')
const currentPage = ref(1)
const totalPages = ref(1)
const itemsPerPage = 6

const loadProducts = async () => {
  const params = {
    sortBy: 'price',
    order: filters.value.order,
    category: filters.value.category || undefined,
    page: currentPage.value,
    limit: itemsPerPage
  }
  const data = await fetchProducts(params)
  products.value = data.products
  totalPages.value = Math.ceil(data.totalItems / itemsPerPage)
}

const loadCategories = async () => {
  categories.value = await fetchCategories()
}

const createProduct = async () => {
  await apiCreateProduct(newProduct.value)
  newProduct.value = {
    name: '',
    description: '',
    price: 0,
    image: '',
    categoryId: null
  }
  successMessage.value = 'Product created successfully!'
  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
  loadProducts()
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    loadProducts()
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    loadProducts()
  }
}

onMounted(() => {
  loadCategories()
  loadProducts()
})

watch(filters, loadProducts, { deep: true })
</script>