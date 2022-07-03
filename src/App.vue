<script setup>
import { RouterView } from "vue-router";
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderNav from "./components/HeaderNav.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <HeaderNav />
  <RouterView />
  <FooterSection />
</template>

<style>
@import "@/assets/base.css";
</style>
