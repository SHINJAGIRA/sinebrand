<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavbarComponent.vue';
</script>

<template>
  <header>
        <div class=" w-full ">
      <Navbar/>
    </div>
  </header>

  <RouterView />
</template>
