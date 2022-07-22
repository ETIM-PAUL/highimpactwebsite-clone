<script setup>
import { store, euro } from "../main";
import { products } from "../json/products.json";
import { useRoute } from "vue-router";
import currency from "currency.js";

const route = useRoute();
const product = products.filter(
  (product) => product.slug === route.params.slug
);
</script>
<script>
export default {
  data() {
    return {
      initialQuantity: 1,
      visibility: true,
      selected: {},
      subTotal: 0,
      errorMessage: false,
    };
  },
  emits: ["update:selected"],
  methods: {
    addToCart: function (name, price, quantity, image, course) {
      store.addItem(name, price, quantity, image, course); //like this
    },
    setOption: function () {
      console.log(this.selected);
      let value = this.selected.amount;
      if (this.selected.name === undefined) {
        this.visibility = true;
      } else {
        this.visibility = false;
      }
      this.subTotal = euro(value).format();
    },
    decreaseQua: function () {
      if (this.initialQuantity == 1) {
        this.errorMessage = true;
      } else this.initialQuantity--;
    },
    automateSubTotal: function (price) {
      let n = currency(price) * this.initialQuantity;
      let d = euro(n).format();
      return d;
    },
  },
};
</script>

<template>
  <div
    class="md:flex md:gap-4 p-4 lg:p-0 lg:w-[82%] m-auto relative justify- md:my-8"
  >
    <div class="p md:w-1/2">
      <img v-bind:src="product[0].imageUrl" />
    </div>
    <div class="mt-4 md:mt-0 md:w-1/2">
      <section class="text-black font-black text-3xl">
        {{ product[0].name }}
      </section>
      <div v-if="product[0].type === 'bootcamp'">
        <p class="py-4">Benefits of Joining Our BootCamp</p>
        <ul>
          <li class="py-2">Training</li>
          <li class="py-2">Mentoring</li>
          <li class="py-2">Certification</li>
          <li class="py-2">3 Months Internship/Work Experience</li>
          <li class="py-2">CV/Cover Letter Review & LinkedIn Optimisation</li>
          <li class="py-2">Job Search and Interview Preparation</li>
          <li class="py-2">On the Job Support (1 month)</li>
        </ul>
        <p class="py-4">Why High Impact Careers?</p>
        <ul>
          <li class="py-2">Experienced Faculty</li>
          <li class="py-2">Affordable Price</li>
          <li class="py-2">Dedicated Mentors</li>
        </ul>
      </div>
      <div v-if="product[0].type === 'bootcamp'">
        <p class="py-4">Benefits of Joining Our BootCamp</p>
        <ul>
          <li class="py-2">Training</li>
          <li class="py-2">Mentoring</li>
          <li class="py-2">Certification</li>
          <li class="py-2">3 Months Internship/Work Experience</li>
          <li class="py-2">CV/Cover Letter Review & LinkedIn Optimisation</li>
          <li class="py-2">Job Search and Interview Preparation</li>
          <li class="py-2">On the Job Support (1 month)</li>
        </ul>
        <p class="py-4">Why High Impact Careers?</p>
        <ul>
          <li class="py-2">Experienced Faculty</li>
          <li class="py-2">Affordable Price</li>
          <li class="py-2">Dedicated Mentors</li>
        </ul>
      </div>
      <div v-if="product[0].type === 'course'">
        <p class="py-4">
          The Summer Python for Data Science & Machine Learning Bootcamp will
          cover the following areas:
        </p>
        <ul>
          <li class="py-2">Python for Data Science</li>
          <li class="py-2">Exploratory Data Analysis</li>
          <li class="py-2">Data Visualization</li>
          <li class="py-2">Machine Learning</li>
        </ul>
        <p class="py-4 font-black">Why High Impact Careers?</p>
        <ul>
          <li class="py-2">Experienced Faculty</li>
          <li class="py-2">Affordable Price</li>
          <li class="py-2">Dedicated Mentors</li>
        </ul>
      </div>
      <p class="font-black text-3xl pt-2">{{ product[0].price }}</p>

      <div class="my-8 bg-[#f7f7f7]" v-if="product[0].type !== 'course'">
        <div class="border text-sm border-[#e1e1e1] border-solid flex h-[60px]">
          <p class="flex items-center p-2">Please select a course</p>
          <div class="border-r mr-3"></div>
          <select
            class="sm:p-4 my-1 rounded-md lg:pr-24"
            @change="setOption()"
            v-model="selected"
          >
            <optgroup>
              <option disabled value="">Please select one</option>
              <option @click="visibility = true">None</option>
              <option
                v-for="option in product[0].options"
                v-bind:key="option.name"
                :value="{ name: option.name, amount: option.amount }"
              >
                {{ option.name }}&nbsp;&#163;{{ option.amount }}
              </option>
            </optgroup>
          </select>
        </div>
      </div>

      <table
        :class="{ hidden: visibility }"
        class="border-collapse border md:my-16 my-10 w-[100%]"
      >
        <thead>
          <tr class="bg-[#f7f7f7]">
            <th class="p-4 pl-[10rem] font-bold">Addon Details</th>
            <th class="p-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-4 text-sm font-bold">{{ product[0].name }}</td>
            <td class="border p-4 text-sm">{{ product[0].price }}</td>
          </tr>
          <tr>
            <td class="border p-4 text-sm bg-[#f7f7f7]">
              Selected Option - {{ selected.name }}
            </td>
            <td class="border p-4 text-[#000] bg-[#f7f7f7] text-sm">
              {{ subTotal }}
            </td>
          </tr>
          <tr>
            <td class="border p-4 text-sm font-bold">Subtotal</td>
            <td class="border p-4 text-sm">
              {{ automateSubTotal(subTotal) }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="changeQuantity flex" :class="{ hidden: visibility }">
        <button
          @click="decreaseQua()"
          class="w-[50px] p-2 border text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          -
        </button>
        <input
          min="1"
          v-model="initialQuantity"
          type="number"
          class="p-2 border w-[50px] focused:border-[#f1f1f1] h-[40px] text-[#000]"
        />
        <button
          @click="initialQuantity++"
          class="w-[50px] border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          +
        </button>
        <div class="flex justify-center align-center mx-1 md:mx-4">
          <button
            @click="
              store.addItem(
                product[0].name,
                automateSubTotal(subTotal),
                subTotal,
                initialQuantity,
                product[0].imageUrl,
                selected.name
              )
            "
            class="w-[150px] rounded-lg border bg-[#2A2A5E] bg-[#2A2A5E] text-[#fff]"
          >
            ADD TO BASKET
          </button>
        </div>
        <button
          @click="initialQuantity++"
          class="w-[70px] rounded-md border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          🤍
        </button>
      </div>
      <p v-if="errorMessage" class="text-[red] my-1 text-[12px]">
        The Minimum Quantity is 1
      </p>

      <!-- Course Add Item -->
      <div
        class="changeQuantity flex mt-10"
        v-if="product[0].type === 'course'"
      >
        <button
          @click="decreaseQua()"
          class="w-[50px] border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          -
        </button>
        <input
          max="5"
          min="1"
          v-model="initialQuantity"
          type="number"
          class="p-2 border w-[55px] focused:border-[#f1f1f1] h-[40px] text-[#000]"
        />
        <button
          @click="initialQuantity++"
          class="w-[50px] border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          +
        </button>
        <div class="flex justify-center align-center mx-4">
          <button
            @click="
              store.addItem(
                product[0].name,
                automateSubTotal(product[0].price),
                euro(product[0].price).format(),
                initialQuantity,
                product[0].imageUrl
              )
            "
            class="w-[150px] rounded-lg border bg-[#2A2A5E] bg-[#2A2A5E] text-[#fff]"
          >
            ADD TO BASKET
          </button>
        </div>
        <button
          @click="initialQuantity++"
          class="w-[70px] rounded-md border p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          🤍
        </button>
        <p v-if="errorMessage" class="text-[red] my-1 text-[12px]">
          The Minimum Quantity is 1
        </p>
      </div>
    </div>
  </div>
</template>
