<script setup>
import { link } from "../../main";
</script>
<script>
export default {
  name: "HeaderNavLink",
  props: ["name"],
};
</script>

<template>
  <RouterLink to="{{getLink}}">
    <span
      @click="link.setLink(name)"
      v-bind:class="link.link === name ? 'sub-active' : null"
      class="font-bold text-black block uppercase lg:hover:bg-sky-100 py-6 pl-8"
      ><slot name="navItem"></slot
    ></span>
  </RouterLink>
</template>
