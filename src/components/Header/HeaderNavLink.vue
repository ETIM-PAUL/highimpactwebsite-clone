<script>
export default {
  name: "HeaderNavLink",
};
</script>

<template>
  <a href="{{getLink}}">
    <span
      class="font-bold text-black block uppercase lg:hover:bg-sky-100 py-6 pl-8"
      ><slot name="navItem"></slot
    ></span>
  </a>
</template>
