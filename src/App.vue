<script setup>
import { RouterView } from "vue-router";
import HeaderNav from "./components/Header/HeaderNav.vue";
import FooterSection from "./components/FooterSection.vue";
import "@/assets/browser.css";
</script>

<template>
  <HeaderNav />
  <RouterView />
  <FooterSection />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/sucess.css";
</style>
