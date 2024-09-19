<script setup lang="ts">
import ImageSlider from "@/components/ImageSlider.vue";
import Navbar from "@/components/NavbarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import { intersectionObserver } from '@/composables/useIntersectionObserver.ts';

const { isIntersecting, observedElement } = intersectionObserver((entry) => {
  console.log('is intersecting:', entry[0].isIntersecting);
});
</script>

<template>
  <main>
    <div class="md:mx-20 font-montserrat">
      <ImageSlider />
     
      <div
  class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-full my-10 justify-items-center"
  ref="observedElement"
>
  <ProductCard v-for="i in 5" :key="i" class="flex justify-center" />
</div>

    </div>
  </main>
</template>
