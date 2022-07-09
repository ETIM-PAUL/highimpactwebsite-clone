<script>
export default {
  data() {
    return {
      initialQuantity: 1,
      visibility: true,
      selected: "",
    };
  },
  methods: {
    toggleVisibility() {},
  },
};
</script>

<template>
  <div
    class="md:flex md:gap-4 p-4 lg:p-0 lg:w-[82%] m-auto relative justify- md:my-24 flex-wr"
  >
    <div class="p md:w-1/2">
      <img src="../assets/laptops.jpg" class="w-[]" />
    </div>
    <div class="mt-4 md:mt-0 md:w-1/2">
      <section class="text-black font-black text-3xl">
        High Impact Careers Bootcamp – Part Payment
      </section>
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
      <p class="font-black text-3xl pt-2">£300.00</p>

      <div class="mt-16 bg-[#f7f7f7]">
        <div class="border text-sm border-[#e1e1e1] border-solid flex">
          <p class="my-7 pl-2 pr-2 lg:pr-24">Please select a course</p>
          <div class="border-r mr-3"></div>
          <div>
            <select
              class="p-4 my-3 rounded-md pr-24"
              @change="visibility = false"
              v-model="selected"
            >
              <optgroup>
                <option disabled value="">Please select one</option>
                <option value="Agile Fundamentals">
                  Agile Fundamentals (+£0.00)
                </option>
                <option value="Cyber Security">Cyber Security (+£0.00)</option>
                <option value="Digital Marketing">
                  Digital Marketing (+£0.00)
                </option>
                <option value="Product Management">
                  Product Management (+£0.00)
                </option>
                <option value="Product Management">
                  Product Management (+£0.00)
                </option>
                <option value="User Experience">
                  User Experience (+£0.00)
                </option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      <table
        :class="{ hidden: visibility }"
        class="border-collapse border md:my-20 my-10 w-[100%]"
      >
        <thead>
          <tr class="bg-[#f7f7f7]">
            <th class="p-4 pl-[10rem] font-bold">Addon Details</th>
            <th class="p-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-4 text-sm font-bold">
              High Impact Careers Bootcamp - Part Payment
            </td>
            <td class="border p-4 text-sm">£300.00</td>
          </tr>
          <tr>
            <td class="border p-4 text-sm bg-[#f7f7f7]">
              Please select a course - {{ selected }}
            </td>
            <td class="border p-4 text-[#000] bg-[#f7f7f7] text-sm">£0.00</td>
          </tr>
          <tr>
            <td class="border p-4 text-sm font-bold">Subtotal</td>
            <td class="border p-4 text-sm">£300.00</td>
          </tr>
        </tbody>
      </table>

      <div class="changeQuantity flex" :class="{ hidden: visibility }">
        <button
          @click="initialQuantity--"
          class="w-[50px] border-2 p-2 border-r text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          -
        </button>
        <input
          v-model="initialQuantity"
          type="number"
          class="p-2 border-l border-r border-2 w-[55px] focused:border-[#f1f1f1] h-[40px] text-[#000]"
        />
        <button
          @click="initialQuantity++"
          class="w-[50px] border-l border-2 p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          +
        </button>
        <div class="flex justify-center align-center mx-4">
          <button
            class="w-[150px] rounded-lg border-[#2A2A5E] bg-[#2A2A5E] text-[#fff]"
          >
            ADD TO BASKET
          </button>
        </div>
        <button
          @click="initialQuantity++"
          class="w-[70px] rounded-md border-l border-2 p-2 text-black text-[20px] h-[40px] hover:bg-black hover:text-[#fff] hover:border-black flex justify-center items-center"
        >
          🤍
        </button>
      </div>
    </div>
  </div>
</template>
