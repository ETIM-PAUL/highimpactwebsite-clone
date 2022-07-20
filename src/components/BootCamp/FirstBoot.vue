<template>
  <div class="bg-[#f7f7f7] lg:my-2 lg:mx-2">
    <div class="p-4 flex justify-center align-center bg-[#2A2A5E] lg:shrink-0">
      <span class="text-white font-black text-3xl text-center">
        <slot name="level"></slot>
        <p class="text-[16px]"><slot name="years"></slot></p>
      </span>
    </div>
    <div class="pt-2 flex justify-center align-center text-[#464646]">
      <sub class="text-7xl font-black text-center"
        ><slot name="price"></slot
      ></sub>
    </div>
    <div class="p-4 flex justify-center align-center">
      <span class="text-[14px] mt-6 text-center">
        ✔ Training to Increase Your Value/Make You More More Marketable
      </span>
    </div>
    <div class="hr bg-[#e1e1e1]"></div>

    <div class="p-4 flex justify-center align-center">
      <span class="text-[14px] text-center">
        ✔ Mentoring to Harness Your Fundamental Understanding of Python
      </span>
    </div>
    <div class="hr bg-[#e1e1e1]"></div>

    <div class="p-4 flex justify-center align-center">
      <span class="text-[14px] text-center">
        ✔ Certificate of Course Completion to Improve Your Employability</span
      >
    </div>

    <div class="p-4 flex justify-center align-center m-12 pb-10">
      <RouterLink v-bind:to="href"
        ><button
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
  name: "FirstBoot",
  props: ["href"],
};
</script>
