<script setup lang="ts">
import ImageSlider from "@/components/ImageSlider.vue";
import Navbar from "@/components/NavbarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import { intersectionObserver } from '@/composables/useIntersectionObserver';
import slideOne from "@/components/slideOne.vue";

const { isIntersecting, observedElement } = intersectionObserver((entry) => {
  console.log('is intersecting:', entry.isIntersecting);
});
</script>

<template>
  <main class='md:mx-20'>
    <div class=" font-montserrat">
      <ImageSlider />
     
      <div
  class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-full my-10 justify-items-center transition-container"
  ref="observedElement"
>
  <ProductCard v-for="i in 5" :key="i" class="flex justify-center" />
</div>

    </div>
    <div class="w-full">
      <slideOne/>
    </div>
  </main>
</template>
<style scoped>
/* Default state (hidden) */
.transition-container {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* When the element is observed */
.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}
</style>