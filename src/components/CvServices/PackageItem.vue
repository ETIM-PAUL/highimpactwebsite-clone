<template>
  <div class="bg-[#f7f7f7] md:w-screen lg:my-24 lg:mx-2">
    <div class="p-4 flex justify-center align-center bg-[#2A2A5E] lg:shrink-0">
      <span class="text-white font-black text-3xl text-center">
        <slot name="level"></slot>
        <p class="text-[16px]"><slot name="years"></slot></p>
      </span>
    </div>
    <div class="pt-2 flex justify-center align-center">
      <span class="font-black text-2xl mt-8">&#163;</span>
      <sub class="text-8xl font-black"><slot name="price"></slot></sub>
    </div>
    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px] mt-6"
        >Professionally Written CV/Resume -
        <span><slot name="sub-price1"></slot></span>
      </span>
    </div>
    <div class="hr"></div>
    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px]"
        >Cover Letter - <slot name="sub-price2"></slot
      ></span>
    </div>
    <div class="hr"></div>
    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px]"
        >LinkedIn Profile Optimisation - <slot name="sub-price3"></slot
      ></span>
    </div>
    <div class="hr"></div>
    <div class="pt-2 flex justify-center align-center">
      <span class="text-[14px]"
        >Full Package - <slot name="full-price"></slot
      ></span>
    </div>
    <div class="pt-2 flex justify-center align-center m-12 lg:pb-0 pb-10">
      <button
        class="w-[150px] rounded-lg border-[#2A2A5E] bg-[#2A2A5E] text-[#fff] p-4"
      >
        Get Started
      </button>
    </div>
  </div>
</template>
