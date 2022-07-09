<template>
  <div class="overlay-color">
    <slot name="image"></slot>
  </div>

  <div class="px-5 pt-10 rounded lg:w-1/2 md:w-1/2 bg-[#fff] m-32">
    <span class="text-black font-black text-3xl">
      <slot name="sub-heading"></slot>
    </span>

    <div class="pt-10">
      <p class="text-black leading-[1.5em] text-[16px]">
        <slot class="first-paragraph"></slot>
      </p>
      <p class="text-black pt-5 leading-[1.5em] text-[16px]">
        <slot name="second-paragraph"></slot>
      </p>
      <p class="text-black pt-16 font-black text-xl">
        <slot name="list-heading"></slot>
      </p>
      <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
        <li class="py-2"><slot name="list-value"></slot></li>
      </ul>
    </div>
  </div>
</template>
