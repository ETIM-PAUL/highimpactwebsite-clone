<script>
import { store } from "../state/store";

export default {
  // props: {
  //   store,
  // },
  methods: {
    addToCart: function (name, amount) {
      store.addCart(name, amount); //like this
    },
  },
  data() {
    return {
      initialQuantity: 1,
      visibility: true,
      selected: "",
      items: store.cartItems,
      name: "Joe",
      amount: "$300",
    };
  },
};
</script>
<template>
  <div
    class="px-4 m-auto flex justify-around items-center h-[270px] bg-[#2A2A5E]"
  >
    <p class="sm:text-[55px] text-[30px] font-black text-[#fff] text-center">
      Shop
    </p>
  </div>
  <div class="my-24 mx-auto px-10 flex flex-wrap justify-center gap-4 w-[100%]">
    <div class="lg:w-1/4 sm:w-1/3 w-[100%]">
      <img
        src="../assets/laptops.jpg"
        class="object-cover w-[100%] h-[220px]"
      />
      <p class="py-4 text-[12px] text-[#FE8D45] h-[55px]">
        Python for Data Science & Machine Learning Bootcamp - Full Payment
      </p>
      <span
        class="bg-[#2A2A5E] text-white py-2 px-4 rounded-lg absolute top-[5%] right-[2%]"
        >$400</span
      >
      <button
        @click="addToCart(name, amount)"
        class="w-[100%] bg-[#2A2A5E] text-white p-3"
      >
        Add To Basket
      </button>
    </div>

    <div class="lg:w-1/4 sm:w-1/3 w-[100%]">
      <img src="../assets/mid.png" class="object-cover w-[100%] h-[220px]" />
      <p class="py-4 text-[12px] text-[#FE8D45] h-[55px]">
        Bespoke Mid-Executive
      </p>
      <span
        class="bg-[#2A2A5E] text-white py-2 px-4 rounded-lg absolute top-[5%] right-[2%]"
        >$50 - $125</span
      >
      <button class="w-[100%] bg-[#2A2A5E] text-white p-3">
        Add To Basket
      </button>
    </div>

    <div class="lg:w-1/4 sm:w-1/3 w-[100%]">
      <img
        src="../assets/laptops.jpg"
        class="object-cover w-[100%] h-[220px]"
      />
      <p class="py-4 text-[12px] text-[#FE8D45] h-[55px]">
        High Impact Careers Bootcamp - Part Payment
      </p>
      <span
        class="bg-[#2A2A5E] text-white py-2 px-4 rounded-lg absolute top-[5%] right-[2%]"
        >$40 - $100</span
      >
      <button class="w-[100%] bg-[#2A2A5E] text-white p-3">
        Add To Basket
      </button>
    </div>
    <div class="lg:w-1/4 sm:w-1/3 w-[100%]">
      <img src="../assets/senior.jpg" class="object-cover w-[100%] h-[220px]" />
      <p class="py-4 text-[12px] text-[#FE8D45] h-[55px]">
        Bespoke Senior Executive
      </p>
      <span
        class="bg-[#2A2A5E] text-white py-2 px-4 rounded-lg absolute top-[5%] right-[2%]"
        >$60 - $150</span
      >
      <button class="w-[100%] bg-[#2A2A5E] text-white p-3">
        Add To Basket
      </button>
    </div>
    <div class="lg:w-1/4 sm:w-1/3 w-[100%]">
      <img src="../assets/entry.jpg" class="object-cover w-[100%] h-[220px]" />
      <p class="py-4 text-[12px] text-[#FE8D45] h-[55px]">Entry Level</p>
      <span
        class="bg-[#2A2A5E] text-white py-2 px-4 rounded-lg absolute top-[5%] right-[2%]"
        >$300</span
      >
      <button class="w-[100%] bg-[#2A2A5E] text-white p-3">
        Add To Basket
      </button>
    </div>
    <div class="lg:w-1/4 sm:w-1/3 w-[100%]">
      <img
        src="../assets/laptops.jpg"
        class="object-cover w-[100%] h-[220px]"
      />
      <p class="py-4 text-[12px] text-[#FE8D45] h-[55px]">
        High Impact Careers Bootcamp - Full Payment
      </p>
      <span
        class="bg-[#2A2A5E] text-white py-2 px-4 rounded-lg absolute top-[5%] right-[2%]"
        >$300</span
      >
      <button class="w-[100%] bg-[#2A2A5E] text-white p-3">
        Add To Basket
      </button>
    </div>
  </div>
</template>
