<template>
  <div class="bg-[#f7f7f7] md:w-screen lg:my-2 lg:mx-2">
    <div class="p-4 flex justify-center align-center bg-[#2A2A5E] lg:shrink-0">
      <span class="text-white font-black text-3xl text-center">
        <slot name="level"></slot>
        <p class="text-[16px]"><slot name="years"></slot></p>
      </span>
    </div>
    <div class="pt-2 flex justify-center align-center text-[#464646]">
      <span class="font-black text-2xl mt-5" :class="{ hidden: showEuro }"
        >&#163;</span
      >
      <sub class="text-7xl font-black"><slot name="price"></slot></sub>
    </div>
    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px] mt-6"> ✔ Training and Mentoring </span>
    </div>
    <div class="hr bg-[#e1e1e1]"></div>

    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px]"> ✔ 3 Months Internship/Work Experience </span>
    </div>
    <div class="hr bg-[#e1e1e1]"></div>

    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px]"> ✔ CV Review & Linkedln Optimisation</span>
    </div>
    <div class="hr bg-[#e1e1e1]"></div>

    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px]"> ✔ Full Package </span>
    </div>
    <div class="hr bg-[#e1e1e1]"></div>

    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px]"> ✔ Job Search and Interview Preparation </span>
    </div>
    <div class="hr bg-[#e1e1e1]"></div>

    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px]">✔ On the Job Support (1 month) </span>
    </div>
    <div class="pt-2 flex justify-center align-center m-12 lg:pb-0 pb-10">
      <RouterLink v-bind:to="href">
        <button
          class="w-[150px] rounded-lg border-[#2A2A5E] bg-[#2A2A5E] text-[#fff] p-4"
        >
          Get Started
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "BootCamp",
  props: ["showEuro", "href"],
};
</script>
