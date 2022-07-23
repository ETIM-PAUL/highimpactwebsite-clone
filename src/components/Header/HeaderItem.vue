<script setup>
import { link } from "../../main";
</script>
<script>
export default {
  name: "HeaderItem",
  props: ["name"],
  methods: {
    hide() {
      this.$emit("hideMenu");
      link.setLink(this.name);
    },
  },
};
</script>

<template>
  <RouterLink to="{{getLink}}">
    <li
      @click="hide"
      v-bind:class="link.link === name ? 'sub-active' : null"
      class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-black-900 lg:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
    >
      <span
        class="font-bold text-black block py-6 lg:py-0 px-1 uppercase lg:hover:text-sky-300"
      >
        <slot name="item"></slot>
      </span>
    </li>
  </RouterLink>
</template>
