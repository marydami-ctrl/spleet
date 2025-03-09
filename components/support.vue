<template>
    <div class="bg-blue-700 p-10 md:p-20 mb-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center">
        <!-- Loop through the cardData array -->
        <div v-for="(card, index) in cardData" :key="index" class="flex flex-col items-center">
          <!-- Image Block (Rounded Circle) -->
          <div class="bg-white p-4 rounded-full flex items-center justify-center w-20 h-20 shadow-md mb-[-40px] z-10">
            <img :src="card.image" alt="" class="w-10 h-10">
          </div>
  
          <!-- Text Block -->
          <div class="bg-white px-6 rounded-lg flex items-center text-sm justify-center text-center w-64 h-48 shadow-md">
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import image1 from "../assets/imag4.svg"; // Import the image
  
  // Define an array with the card data
  const cardData = [
    { image: image1, text: "75% of consumers prefer human interactions to automated interactions." },
    { image: image1, text: "81% of consumers say a positive experience increases the chances of them making another purchase." },
    { image: image1, text: "76% of surveyed customers contact customer service over the phone." },
    { image: image1, text: "68% of buyers will pay more for products and services from a company with a strong record of good customer service." }
  ];
  </script>
  