<template>
  <header class="bg-white p-4 mb-20">
    <div class="block">
      <div class="flex justify-between items-center max-w-7xl mx-auto">
        <!-- Logo -->
        <div class="text-2xl font-bold flex space-x-2 items-center ml-4 md:ml-16">
          <img src="../assets/Logomark.svg" alt="">
          <span>Capsule</span>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none">
          <svg v-if="!menuOpen" class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-else class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Navigation (Hidden on mobile) -->
        <nav class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-700 hover:text-gray-900">About Us</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Product</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Support</a>
        </nav>

        <!-- Get Capsule Button (Hidden on small screens) -->
        <button class="hidden md:block border border-gray-700 rounded-sm px-4 py-2 text-blue-400 hover:bg-gray-100 mr-4 md:mr-12">
          Get Capsule
        </button>
      </div>

      <!-- Mobile Menu (Shown when toggled) -->
      <div v-if="menuOpen" class="md:hidden flex flex-col space-y-4 mt-4 text-center">
        <a href="#about" @click="menuOpen = false" class="text-gray-700 hover:text-gray-900">About Us</a>
  <a href="#pricing" @click="menuOpen = false" class="text-gray-700 hover:text-gray-900">Pricing</a>
  <a href="#product" @click="menuOpen = false" class="text-gray-700 hover:text-gray-900">Product</a>
  <a href="#support" @click="menuOpen = false" class="text-gray-700 hover:text-gray-900">Support</a>
        <button class="border border-gray-700 rounded-sm px-4 py-2 text-blue-400 hover:bg-gray-100">
          Get Capsule
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>
