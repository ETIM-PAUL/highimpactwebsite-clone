<script setup>
import { products } from "../json/products.json";
import { store, euro } from "../main";
</script>

<script>
export default {
  methods: {
    automateSubTotal: function (price) {
      let n = price * this.initialQuantity;
      let d = euro(n).format();
      return d;
    },
  },
  data() {
    return {
      initialQuantity: 1,
      data: products,
    };
  },
};
</script>
<template>
  <div
    class="px-4 m-auto flex justify-around items-center h-[270px] bg-[#2A2A5E]"
    v-if="data"
  >
    <p class="sm:text-[55px] text-[30px] font-black text-[#fff] text-center">
      Shop
    </p>
  </div>
  <div
    class="my-24 mx-auto px-10 flex flex-wrap justify-center gap-4 w-[100%]"
    v-if="data"
  >
    <div
      class="lg:w-1/4 sm:w-1/3 w-[100%]"
      v-for="product in data"
      v-bind:key="product.name"
    >
      <RouterLink :to="`/products/${product.slug}`">
        <img
          v-bind:src="product.imageUrl"
          class="object-cover w-[100%] h-[220px]"
        />
        <p class="py-4 text-[12px] text-[#FE8D45] h-[55px]">
          {{ product.name }}
        </p>
        <button
          class="w-[100%] bg-[#2A2A5E] text-white p-3"
          v-if="product.type !== 'course'"
        >
          Select Options
        </button>
      </RouterLink>
      <div
        class="bg-[#2A2A5E] text-white py-2 px-4 rounded-lg absolute top-[5%] right-[5%] flex"
      >
        {{ product.price }}
      </div>
      <button
        v-if="product.type === 'course'"
        @click="
          store.addItem(
            product.name,
            automateSubTotal(product.price),
            automateSubTotal(product.price),
            initialQuantity,
            product.imageUrl
          )
        "
        class="w-[100%] bg-[#2A2A5E] text-white p-3"
      >
        Add To Basket
      </button>
    </div>
  </div>
</template>
