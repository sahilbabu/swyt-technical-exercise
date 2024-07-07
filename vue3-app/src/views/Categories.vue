<template>
  <div class="container w-full md:max-w-3xl mx-auto">
    <h1 class="text-3xl md:text-4xl text-green-500 font-bold no-underline py-6">Categories</h1>
    <hr class="border-b-2 border-gray-400 mb-2">
    <form @submit.prevent="createCategory">

      <div class="mt-2">
        <input v-model="newCategory.name" placeholder="New Category Name"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required />
      </div>
      <div class="mt-2">
        <input v-model.number="newCategory.parentCategoryId" placeholder="Parent Category ID (optional)"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>

      <button
        class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4"
        type="submit">Add Category</button>

    </form>
    <!-- Success Message -->
    <div v-if="successMessage" class="mt-4 p-2 bg-green-200 text-green-800 rounded">
      {{ successMessage }}
    </div>

    <ul role="list"
      class="divide-y divide-gray-100 my-8  gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
      <li class="flex gap-x-3" v-for="category in categories" :key="category.id">

        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z">
          </path>
        </svg>
        {{ category.name }}
      </li>
    </ul>
    
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { fetchCategories, createCategory as apiCreateCategory } from '../services/api'

const categories = ref([])
const newCategory = ref({
  name: '',
  parentCategoryId: null
})
const successMessage = ref('')

const loadCategories = async () => {
  categories.value = await fetchCategories()
}

const createCategory = async () => {
  await apiCreateCategory(newCategory.value.name, newCategory.value.parentCategoryId)
  newCategory.value.name = ''
  newCategory.value.parentCategoryId = null
  successMessage.value = 'Category created successfully!'
  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
  loadCategories()
}

onMounted(loadCategories)
</script>
