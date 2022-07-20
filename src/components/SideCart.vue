<script setup>
import IconHide from "./icons/IconHide.vue";
import { storeToRefs } from "pinia";
import { store, euro } from "../main";

const { cartItems } = storeToRefs(store);
</script>
<script>
export default {
  methods: {
    showCart() {
      let toggle = this.$refs.cart;
      toggle.classList.remove("remove-cart");
      toggle.classList.add("show-cart");
      toggle.classList.toggle("cart");
    },
    hideCart() {
      let toggle = this.$refs.cart;
      toggle.classList.add("remove-cart");
      toggle.classList.remove("show-cart");
    },
    formatTotalPrice() {
      let price = euro(store.itemsTotalPrice).format();
      return price;
    },
  },
};
</script>

<template>
  <ul class="items-center text-base cursor-pointer pt-10">
    <li v-for="product in cartItems" v-bind:key="product.name">
      <div class="py-2 px-6 w-full flex">
        <div class="w-[120px] p-2">
          <img
            v-bind:src="product.image"
            class="w-[100px] h-[80px] min-w-[100px] max-w-[100px] object-cover"
          />
          <p class="p-2 font-black">
            {{ product.unitPrice }} x {{ product.amount }}
          </p>
        </div>
        <div class="mt-[10px]">
          <p class="p-2 font-black text-[10px]">
            {{ product.name }} ~ {{ product.selectedCourse }}
          </p>
        </div>
        <div class="my-8">
          <button
            @click="
              store.increaseItemQuantity(
                product.name,
                product.selectedCourse,
                product.amount
              )
            "
            class="bg-white w-[20px] border p-2 text-black text-[20px] h-[20px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
          >
            +
          </button>
          <p
            type="number"
            class="p-2 w-[40px] flex items-center h-[20px] text-[#000] justify-start"
          >
            {{ product.amount }}
          </p>

          <button
            @click="
              store.decreaseItemQuantity(
                product.name,
                product.selectedCourse,
                product.amount
              )
            "
            class="w-[20px] bg-white border p-2 text-black text-[20px] h-[20px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
          >
            -
          </button>
        </div>
        <button
          @click="store.removeItem(product)"
          class="items-center px-2 mt-2 ml-1 text-sm text-black-500 rounded-lg absolute top-[-5px] left-[108px] hover:bg-[#2A2A5E]"
        >
          <IconHide />
        </button>
      </div>
      <div class="mx-auto w-[90%] h-[1px] bg-[#e1e1e1] mb-[10px]"></div>
    </li>
  </ul>
  <div class="mx-auto w-[90%] my-6 text-[20px] text-center">
    <span class="font-black">Total</span>: {{ formatTotalPrice() }}
  </div>
  <div class="mx-auto w-[90%] h-[1px] bg-[#e1e1e1]"></div>
  <div class="mx-auto w-[90%] my-4 flex justify-between">
    <RouterLink to="/basket/"
      ><button class="bg-[#2A2A5E] p-4 text-white">
        View Basket
      </button></RouterLink
    >
    <RouterLink to="/checkout">
      <button class="bg-[#FE8D45] p-4 text-white">Checkout</button></RouterLink
    >
  </div>
</template>
