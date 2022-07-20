<script setup>
import { storeToRefs } from "pinia";
import IconHide from "../components/icons/IconHide.vue";
import { store } from "../main";
import { euro } from "../main";

const { cartItems } = storeToRefs(store);
</script>

<script>
export default {
  methods: {
    formatTotalPrice() {
      let price = euro(store.itemsTotalPrice).format();
      return price;
    },
  },
};
</script>
<template>
  <div
    class="px-4 m-auto flex justify-center items-center h-[270px] bg-[#2A2A5E]"
  >
    <p class="sm:text-[55px] text-[30px] font-black text-[#fff] text-center">
      Cart
    </p>
  </div>

  <div
    class="px-3 my-36 mx-auto mx md:flex justify-between lg:justify-around gap-4"
  >
    <div>
      <table class="table-auto hidden sm:block">
        <thead class="bg-[#2A2A5E] text-white">
          <tr>
            <th class="py-2 px-10 font-black">Image</th>
            <th class="py-2 px-10 font-black">Name</th>
            <th class="py-2 px-10 font-black">Price</th>
            <th class="py-2 px-10 font-black">Quantity</th>
            <th class="py-2 px-10 font-black">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cartItems" v-bind:key="product.name">
            <td class="p-4">
              <img
                v-bind:src="product.image"
                class="w-[100px] h-[80px] min-w-[100px] max-w-[100px] object-cover"
              />
              <button
                @click="store.removeItem(product)"
                class="items-center p-2 ml-1 text-sm hover:bg-[#2A2A5E] text-black-500 rounded-lg absolute top-[10px] left-[90px]"
              >
                <IconHide />
              </button>
            </td>

            <td class="p-4">
              {{ product.name }} ({{ product.selectedCourse }})
            </td>
            <td class="p-4 text-center">{{ product.unitPrice }}</td>
            <td class="px-12 block mt-4">
              <button
                @click="
                  store.decreaseItemQuantity(
                    product.name,
                    product.selectedCourse,
                    product.amount
                  )
                "
                class="w-[50px] bg-white border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
              >
                -
              </button>
              <p
                v-bind:value="product.amount"
                type="number"
                class="p-2 border w-[50px] focused:border-[#f1f1f1] h-[40px] text-[#000] flex justify-center items-center"
              >
                {{ product.amount }}
              </p>
              <button
                @click="
                  store.increaseItemQuantity(
                    product.name,
                    product.selectedCourse
                  )
                "
                class="bg-white w-[50px] border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
              >
                +
              </button>
            </td>
            <td class="p-4 text-center">{{ product.price }}</td>
          </tr>
        </tbody>
      </table>

      <table class="table-fixed block sm:hidden">
        <thead class="bg-[#2A2A5E] text-white w-full">
          <tr>
            <th class="py-2 px-12 font-black">Image</th>
            <th class="py-2 px-12 font-black">Name</th>
            <th class="py-2 px-12 font-black">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cartItems" v-bind:key="product.name">
            <td class="p-4">
              <img
                v-bind:src="product.image"
                class="w-[80px] h-[80px] min-w-[80px] max-w-[80px] object-cover"
              />
              <p>{{ product.unitPrice }} x {{ product.amount }}</p>
              <button
                @click="store.removeItem(product)"
                class="items-center p-2 ml-1 text-sm hover:bg-[#2A2A5E] text-black-500 rounded-lg absolute top-[-2px] left-[75px]"
              >
                <IconHide />
              </button>
            </td>

            <td class="p-4 text-[11px]">
              {{ product.name }} ({{ product.selectedCourse }})
            </td>
            <td class="px-12 block mt-4">
              <button
                @click="
                  store.decreaseItemQuantity(
                    product.name,
                    product.selectedCourse,
                    product.amount
                  )
                "
                class="w-[50px] bg-white border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
              >
                -
              </button>
              <p
                v-bind:value="product.amount"
                class="p-2 border w-[50px] focused:border-[#f1f1f1] h-[40px] text-[#000] flex justify-center items-center"
              >
                {{ product.amount }}
              </p>
              <button
                @click="
                  store.increaseItemQuantity(
                    product.name,
                    product.selectedCourse
                  )
                "
                class="bg-white w-[50px] border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        class="block sm:flex sm:justify-between sm:gap-4"
        v-if="store.cartItems.length > 0"
      >
        <a
          href="/shop"
          class="w-[100%] text-center block sm:w-[40%] mt-6 bg-[#e1e1e1] text-black p-4 hover:bg-[#2A2A5E] hover:text-white rounded-md cursor-pointer"
        >
          <button class="">
            <span class="text-2xl px-4">⟵</span>Continue Shopping
          </button>
        </a>
        <button
          @click="store.clearCart()"
          class="w-[100%] sm:w-[40%] mt-6 bg-[#e1e1e1] text-black p-4 rounded-md hover:bg-[#2A2A5E] hover:text-white"
        >
          Clear All
        </button>
      </div>
      <div class="block flex justify-between gap-4" v-else>
        <a
          href="/shop"
          class="w-[100%] sm:w-[40%] mt-6 bg-[#e1e1e1] text-black p-4 hover:bg-[#2A2A5E] hover:text-white rounded-md cursor-pointer"
        >
          <button><span class="text-2xl px-4">⟵</span>Start Shopping</button>
        </a>
      </div>
    </div>
    <div class="mt-8 md:mt-0">
      <div class="mb-8">
        <div
          class="flex justify-between lg:w-[300px] md:w-[100%] text-xl] mb-lg"
        >
          <span>Subtotal</span>
          <span>{{ formatTotalPrice() }}</span>
        </div>
        <div class="w-[100%] h-[1px] mt-6 bg-[#e1e1e1]"></div>
      </div>
      <div class="mb-8">
        <div
          class="flex justify-between lg:w-[300px] md:w-[100%] text-xl] mb-lg"
        >
          <span>Discount</span>
          <span>£0.00</span>
        </div>
        <div class="w-[100%] h-[1px] mt-6 bg-[#e1e1e1]"></div>
      </div>
      <div class="mt-8">
        <div
          class="flex justify-between lg:w-[300px] md:w-[100%] text-xl] mb-lg"
        >
          <span>Total</span>
          <span>{{ formatTotalPrice() }}</span>
        </div>
      </div>
      <a href="/checkout">
        <button class="w-[100%] mt-6 bg-[#2A2A5E] text-white p-4 rounded-md">
          Proceed to checkout
        </button></a
      >
    </div>
  </div>
  <div></div>
</template>
