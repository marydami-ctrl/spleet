<template>
    <!-- footer -->
    <div class="bg-yellow-100 block p-10 mb-10">
      <!-- First Section (Company Info) -->
      <div class="flex flex-col md:flex-row justify-between p-10 space-y-6 md:space-y-0">
        
        <!-- Logo & Contact Info -->
        <div class="md:ml-16 flex flex-col items-start space-y-3">
          <div class="flex items-center space-x-2 text-2xl font-bold">
            <img src="../assets/Logomark.svg" alt="">
            <span>Capsule</span>
          </div>
          <div class="text-sm text-gray-600">
            <p>hello@capsule.africa</p>
            <i>+234 1 343 8962</i>
            <div class="flex space-x-3">
              <VIcon name="la-facebook-f" class="text-blue-600 text-2xl" />
            </div>
          </div>
        </div>
  
        <!-- Company Info -->
        <div class="flex flex-col items-start space-y-3">
          <div class="text-2xl font-bold">Company</div>
          <div class="text-sm text-gray-600 flex flex-col space-y-1">
            <p>Help & Support</p>
            <i>About Us</i>
            <i>Product</i>
            <i>Media</i>
            <i>FAQs</i>
          </div>
        </div>
  
        <!-- Address -->
        <div class="flex flex-col items-start space-y-3">
          <div class="text-2xl font-bold md:ml-28">Address</div>
          <div class="text-sm text-gray-600 md:mr-20">
            <p>The London Mall, 3 Standard Way,</p>
            <i class="md:ml-32">Phase 1, Abuja</i>
          </div>
        </div>
      </div>
  
      <!-- Footer Section -->
      <div class="flex flex-col md:flex-row justify-between pt-5 text-sm text-gray-600">
        <div class="flex space-x-3 md:ml-24">
          <p>© 2025 Capsule Africa</p>
          <p>All rights reserved</p>
        </div>
        <div class="flex space-x-3 md:mr-24">
          <p>Terms & Agreement</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { addIcons } from "oh-vue-icons";
  import { LaFacebookF } from "oh-vue-icons/icons";
  import { VIcon } from "oh-vue-icons";
  
  addIcons(LaFacebookF);
  
  export default {
    components: {
      VIcon,
    },
  };
  </script>
  