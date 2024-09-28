<template>
    <div class="">
        <nav class="md:mx-20 font-montserrat mb-10">
            <div class="flex justify-between text-center text-2xl mb-5 mt-4">
                <div class=" text-left w-full text-sm">b</div>
                <div class="   w-full">Sine Brand</div>
                <div class="text-right w-full text-sm">t</div>
            </div>
            <div class="flex justify-center">
                <ul class="flex space-x-10">
                    <NavbarLinks>Home</NavbarLinks>
                    <NavbarLinks>Products</NavbarLinks>
                    <NavbarLinks>Shop</NavbarLinks>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
import NavbarLinks from './NavbarLinksComponent.vue';
</script>