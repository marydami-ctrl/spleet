
<template><div id="pricing" class="block p-8 mt-40">
    <h1 class="text-2xl font-semibold text-center mb-8 font-merriweather">Choose a plan that works for you</h1>
  
    <!-- Responsive Grid Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-center">
  
      <!-- Image Column -->
      <div class="flex justify-center items-center bg-white min-h-[220px] h-full w-full">
        <img src="../assets/Logomark.svg" alt="Logo" class="w-16 h-16">
      </div>
  
      <!-- Starter Plan -->
      <div tabindex="0" class="bg-white p-6 rounded-lg border border-gray-200 flex flex-col min-h-[220px] h-full w-full 
          focus:border-blue-900 focus:ring focus:ring-blue-300 focus:rounded-xl focus:outline-none">
        <h5 class="text-sm text-blue-600 self-start mb-1">Starter Plan</h5>
        <h4 class="text-xl font-bold self-start text-black mb-1">N25,000/month</h4>
        <i class="text-sm text-gray-600 self-start mb-3">For businesses with few customers</i>
        <button class="bg-gray-200 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-700 transition mt-4 
            focus:bg-blue-700 focus:ring focus:ring-blue-300">
          Subscribe Here
        </button>
      </div>
  
      <!-- Growth Plan -->
      <div tabindex="0" class="bg-white p-6 rounded-lg border border-gray-200 flex flex-col min-h-[220px] h-full w-full 
          focus:border-blue-900 focus:ring focus:ring-blue-300 focus:rounded-xl focus:outline-none">
        <h5 class="text-sm text-blue-600 self-start mb-1">Growth Plan</h5>
        <h4 class="text-xl font-bold self-start text-blue-600 mb-1">N50,000/month</h4>
        <i class="text-sm text-gray-600 self-start mb-3">For growing businesses</i>
        <button class="bg-gray-200 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-700 transition mt-4 
            focus:bg-blue-700 focus:ring focus:ring-blue-300">
          Subscribe Here
        </button>
      </div>
  
      <!-- All Access Plan -->
      <div tabindex="0" class="bg-white p-6 rounded-lg border border-gray-200 flex flex-col min-h-[220px] h-full w-full 
          focus:border-blue-900 focus:ring focus:ring-blue-300 focus:rounded-xl focus:outline-none">
        <h5 class="text-sm text-blue-600 self-start mb-1">All Access</h5>
        <h4 class="text-xl font-bold self-start text-blue-600 mb-1">Custom</h4>
        <i class="text-sm text-gray-600 self-start mb-3">For e-commerce and retail businesses</i>
        <button class="bg-gray-200 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-700 transition mt-4 
            focus:bg-blue-700 focus:ring focus:ring-blue-300">
          Calculate Your Cost
        </button>
      </div>
  
    </div>
  </div>
  <div class="p-8">
  <!-- First Row -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-blue-100 p-4 text-center">
    <i>Call Reception</i>
    <i>Receive calls only</i>
    <i>Receive and make calls</i>
    <i>Receive and make calls</i>
  </div>

  <!-- Second Row -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-center">
    <i>Calls per Week</i>
    <i>Less than 30 calls per week</i>
    <i>30 - 70 calls per week</i>
    <i>You choose</i>
  </div>

  <!-- Third Row -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-blue-100 p-4 text-center">
    <i>Agents</i>
    <i>Shared agents</i>
    <i>Semi-dedicated agents</i>
    <i>Fully dedicated agents</i>
  </div>
</div>

  </template>