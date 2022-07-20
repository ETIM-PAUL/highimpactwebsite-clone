<script setup>
import OrderPlaced from "../components/OrderPlaced.vue";
import { ref } from "vue";
import { store, euro } from "../main";
const submitted = ref(false);
const { cartItems } = store;

const axios = {
  post: () => new Promise((r) => setTimeout(r, 2000)),
};

async function placeOrder(credentials) {
  setTimeout(await axios.post(credentials), 1000);
  submitted.value = true;
  store.clearCart();
}
</script>

<script>
export default {
  components() {
    OrderPlaced;
  },
  methods: {
    formatTotalPrice() {
      let price = euro(store.itemsTotalPrice).format();
      return price;
    },
  },
};
</script>

<template>
  <div class="bg-white-700">
    <div
      v-if="!submitted"
      class="pt-1 mb-36 md:gap-0 w-[100%] md:w-[95%] m-auto lg:gap-4 block md:flex justify-center block lg:flex md:pt-1 sm:pt-1"
    >
      <div class="bg-[white] md:m w-[100%]">
        <FormKit
          type="form"
          :form-class="submitted ? 'hide' : 'show'"
          @submit="placeOrder(credentials)"
          :actions="false"
          incomplete-message="Ooops! We cannot process your payment without all fields being filled out correctly."
          :classes="{
            message: 'pl-5 text-[#d9534f] mb-1 text-sm',
          }"
        >
          <div class="bg-sky-50 py-5">
            <div class="lg:flex block">
              <FormKit
                type="text"
                label="First Name*"
                placeholder="First Name"
                validation="required|length:3|alpha:latin"
                :classes="{
                  outer: 'mx-5 mt-5  lg:w-1/2 ',

                  label: ' block mb-1 text-md',
                  inner:
                    'w-full border border-gray-400 mb-1 overflow-hidden focus-within:border-blue-500 ',
                  input:
                    'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                  message: 'text-[#d9534f] mb-1 text-sm',
                }"
              />
              <FormKit
                type="text"
                label="Last Name*"
                placeholder="Last Name"
                validation="required|length:3|alpha:latin"
                :classes="{
                  outer: 'mx-5 mt-5 lg:w-1/2  ',

                  label: ' block mb-1 text-md',
                  inner:
                    'w-full border border-gray-400 mb-1 overflow-hidden focus-within:border-blue-500 ',
                  input:
                    'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                  message: 'text-[#d9534f] mb-1 text-sm',
                }"
              />
            </div>

            <div class="flex">
              <FormKit
                type="text"
                validation="required"
                placeholder="Country or Region"
                label="Country/Region *"
                :classes="{
                  outer: 'mx-5 mt-5 w-[100%]',

                  label: ' block mb-1 text-md',
                  inner:
                    'w-[100%] border border-gray-400 mb-1 overflow-hidden focus-within:border-blue-500 ',
                  input:
                    'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                  message: 'text-[#d9534f] mb-1 text-sm',
                }"
              />
            </div>
            <div class="flex">
              <FormKit
                type="text"
                validation="required|length:10"
                placeholder="House number and street name"
                label="Street address *"
                :classes="{
                  outer: 'mx-5 mt-5 w-[100%]',

                  label: ' block mb-1 text-md',
                  inner:
                    'w-full border border-gray-400 mb-1 overflow-hidden focus-within:border-blue-500 ',
                  input:
                    'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                  message: 'text-[#d9534f] mb-1 text-sm',
                }"
              />
            </div>
            <div class="flex">
              <FormKit
                type="text"
                validation="required|length:5"
                label="Town/City *"
                :classes="{
                  outer: 'mx-5 mt-5 w-[100%]',

                  label: ' block mb-1 text-md',
                  inner:
                    'w-full border border-gray-400 mb-1 overflow-hidden focus-within:border-blue-500 ',
                  input:
                    'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                  message: 'text-[#d9534f] mb-1 text-sm',
                }"
              />
            </div>
            <div class="flex">
              <FormKit
                type="text"
                validation="required"
                label="Phone *"
                :classes="{
                  outer: 'mx-5 mt-5 w-[100%]',

                  label: ' block mb-1 text-md',
                  inner:
                    'w-full border border-gray-400 mb-1 overflow-hidden focus-within:border-blue-500 ',
                  input:
                    'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                  message: 'text-[#d9534f] mb-1 text-sm',
                }"
              />
            </div>
            <div class="flex">
              <FormKit
                type="email"
                label="Email address *"
                placeholder="Email address"
                validation="required|email"
                :classes="{
                  outer: 'mx-5 mt-5 w-[100%]',

                  label: ' block mb-1 text-md',
                  inner:
                    'w-full border border-gray-400 mb-1 overflow-hidden focus-within:border-blue-500 ',
                  input:
                    'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                  message: 'text-[#d9534f] mb-1 text-sm',
                }"
              />
            </div>
          </div>

          <div class="flex mt-8 gap-2 px-4 md:px-0">
            <FormKit type="radio" />
            <p class="font-black text-[14px]">Credit Card (Stripe)</p>
          </div>
          <p class="text-[12px] pt-4 px-4 md:px-0">
            Pay with your credit card via Stripe
          </p>
          <div class="flex">
            <FormKit
              type="number"
              label="Card Number *"
              validation="required"
              :classes="{
                outer: 'mx-5 mt-5 w-[100%]',

                label: ' block mb-1 font-bold text-md',
                inner:
                  'w-full  border border-gray-400 mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full h-12 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                message: 'text-[#d9534f] mb-1 text-sm',
              }"
            />
          </div>
          <div class="flex md:gap-4 mt-2">
            <FormKit
              type="date"
              label="Expiry Date*"
              validation="required"
              :classes="{
                outer: 'mx-5 mt-5  w-1/2',

                label: ' block mb-1 font-bold text-md',
                inner:
                  'w-full border border-gray-400  mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full h-12 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                message: 'text-[#d9534f] mb-1 text-sm',
              }"
            />
            <FormKit
              type="number"
              label="Card Code(CVC)*"
              validation="required|maxLength:3"
              :classes="{
                outer: 'mx-5 mt-5   w-1/2',

                label: ' block mb-1 font-bold text-md',
                inner:
                  'w-full border border-gray-400  mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full h-12 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                message: 'text-[#d9534f] mb-1 text-sm',
              }"
            />
          </div>
          <div class="mt-8 flex gap-3 px-4 md:px-0">
            <FormKit type="checkbox" />
            <p class="text-[14px]">
              I would like to receive exclusive emails with discounts and
              product information (optional)
            </p>
          </div>
          <p class="my-10 text-[14px] px-4 md:px-0">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purpose described
            in our privacy policy
          </p>
          <FormKit
            type="submit"
            label="Place Order"
            :classes="{
              outer:
                'mx-4 mt-10  border-2 border-[#FE8D45] bg-[#FE8D45] hover:bg-[#2A2A5E] hover:border-[#2A2A5E]',
              label: 'hidden block mb-1 font-bold text-sm',
              inner:
                'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden hover:border-blue-500 ',
              input:
                'w-full h-14 px-3 border-none text-md text-[white] placeholder:text-black-200 placeholder:text-[18px]',
            }"
          />
        </FormKit>
      </div>
      <div
        class="px-10 pt-5 md:pb-60 pb-3 mt-6 md:mt-0 sm:w-full lg:w-1/2 block"
      >
        <div class="flex justify-between text-[17px]">
          <span class="font-black">Product</span>
          <span class="font-black">Subtotal</span>
        </div>
        <div class="">
          <ul class="items-center text-base cursor-pointer pt-1">
            <li
              class="py-4 w-full flex justify-between"
              v-for="product in cartItems"
              v-bind:key="product.name"
            >
              <div class="block sm:flex">
                <img
                  v-bind:src="product.image"
                  class="w-[100px] h-[80px] min-w-[100px] max-w-[100px] object-cover"
                />

                <p class="p-2 font-black text-[10px]">
                  {{ product.name }} ~ {{ product.selectedCourse }} x
                  {{ product.amount }}
                </p>
              </div>
              <div>
                <p class="py-2 font-black">{{ product.price }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg-[#e1e1e1] my-6 w-full h-[1px]"></div>
        <div class="flex justify-between text-[17px]">
          <span class="font-black">Subtotal</span>
          <span class="font-black">{{ formatTotalPrice() }}</span>
        </div>
        <div class="bg-[#e1e1e1] my-6 w-full h-[1px]"></div>
        <div class="flex justify-between text-[17px]">
          <span class="font-black">Discount</span>
          <span class="font-black">£0.00</span>
        </div>
        <div class="bg-[#e1e1e1] my-6 w-full h-[1px]"></div>
        <div class="flex justify-between text-[17px]">
          <span class="font-black">Total</span>
          <span class="font-black">{{ formatTotalPrice() }}</span>
        </div>
        <div class="bg-[#e1e1e1] my-6 w-full h-[1px]"></div>
      </div>
    </div>
  </div>
  <div v-if="submitted" class="bg-[white] w-[80%] mx-auto pt-30">
    <OrderPlaced />
  </div>
</template>
