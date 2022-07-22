<script setup>
import { RouterView } from "vue-router";
import HeaderNav from "./components/Header/HeaderNav.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template class="overflow-hidden">
  <HeaderNav />
  <RouterView />
  <FooterSection />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/sucess.css";
</style>
