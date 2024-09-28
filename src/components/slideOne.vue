<template>
    <div class="glide w-full">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide" v-for="i in 4" :key='i'>
                    <ProductCard />
                </li>
            </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide_arrow glide__arrows--left" data-glide-el="<">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

            </button>
            <button class="glide_arrow glide__arrows--right" data-glide-el=">">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Glide from '@glidejs/glide';
import ProductCard from './ProductCard.vue';
onMounted(() => {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 1,
        autoplay: 10000,

    }).mount();
})
</script>
<style>
.glide__slide {
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
}
</style>