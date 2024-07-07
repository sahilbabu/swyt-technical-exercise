<template>
  <div>
    <Header />
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
</script>
