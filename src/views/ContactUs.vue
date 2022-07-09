<script setup>
import IconFacebook from "../components/icons/IconFacebook.vue";
import IconTwitter from "../components/icons/IconTwitter.vue";
import IconLinkein from "../components/icons/IconLinkein.vue";
import IconYoutube from "../components/icons/IconYoutube.vue";

const axios = {
  post: () => new Promise((r) => setTimeout(r, 2000)),
};

async function login(credentials) {
  const res = await axios.post(credentials);
  alert({ res });
}
</script>

<template>
  <div class="bg-white-700">
    <div class="w-[90%] lg:w-[63%] m-auto">
      <div class="md:mt-24 relative">
        <div class="pt-10 text-center">
          <p
            class="relative text-black md:text-7xlmd:text-7xl lg:text-7xl text-5xl font-black"
          >
            Contact Us
          </p>
          <p class="relative text-black text-[16px] py-4">
            Thank you for your interest in High Impact Careers. Please contact
            us if you have any enquiries.
          </p>
        </div>
      </div>
    </div>
    <div
      class="pt-1 mb-36 md:gap-0 w-[95%] md:w-[80%] lg:w-[80%] sm:w-[90%] m-auto lg:gap-4 sm:block xs-block md:flex justify-center block lg:flex md:pt-1 sm:pt-1"
    >
      <div
        class="md:px-20 px-10 pt-26 md:pb-60 pb-12 md:mt-28 sm:w-full lg:w-1/2 bg-[#2A2A5E] block"
      >
        <p class="text-[#fff] text-2xl md:pt-32 lg:pt-32 pt-12">
          Locations: UK, EU, Africa & Canada
        </p>
        <p class="text-[#fff] text-2xl mt-6">
          HQ: Donnington Road, Kenton, HA3 0NB, London, United Kingdom
        </p>
        <p class="text-[#fff] text-2xl mt-6">Info@highimpactcareers.co.uk</p>
        <p class="text-[#fff] text-2xl mt-6">
          07703500097; 07341112727 (WhatsApp)
        </p>
        <p class="text-[#fff] font-black text-2xl mt-6">We are social</p>
        <div class="flex">
          <div>
            <ul class="pt-8 text-white flex justify-evenly gap-4">
              <li class="mb-3 w-11 cursor-pointer">
                <IconFacebook />
              </li>
              <li class="mb-3 w-10 cursor-pointer">
                <IconTwitter />
              </li>
              <li class="mt-1 w-8 cursor-pointer">
                <IconLinkein />
              </li>
              <li class="mb-3 w-12 ml-2 cursor-pointer">
                <IconYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="md:p-16 bg-[white] md:mt-32 lg:w-1/2">
        <FormKit
          type="form"
          @submit="login"
          :actions="false"
          incomplete-message="Ooops! We can not be of service without all the fields being filled out correctly."
          :classes="{
            message: 'pl-5 text-[#d9534f] mb-1 text-sm',
          }"
        >
          <div class="lg:flex sm:flex md:block block">
            <FormKit
              type="text"
              label="*First Name"
              placeholder="First Name"
              validation="required|length:3|alpha:latin"
              :classes="{
                outer: 'mx-5 mt-5  md:w-[250px] lg:w-[250px] sm:w-[100%] ',

                label: 'hidden block mb-1 font-bold text-sm',
                inner:
                  'w-full border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                message: 'text-[#d9534f] mb-1 text-sm',
              }"
            />
            <FormKit
              type="text"
              label="*Last Name"
              placeholder="Last Name"
              validation="length:3|alpha:latin"
              :classes="{
                outer: 'mx-5 mt-5 md:w-[250px] lg:w-[250px] sm:w-[100%] ',

                label: 'hidden block mb-1 font-bold text-sm',
                inner:
                  'w-full border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
              }"
            />
          </div>
          <div class="lg:flex sm:flex md:block block">
            <FormKit
              type="email"
              label="*Email address"
              placeholder="Email address"
              validation="required|email"
              :classes="{
                outer: 'mx-5 mt-5  md:w-[250px] lg:w-[250px] sm:w-[100%] ',

                label: 'hidden block mb-1 font-bold text-sm',
                inner:
                  'w-full border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                message: 'text-[#d9534f] mb-1 text-sm',
              }"
            />
            <FormKit
              type="text"
              label="*Phone Number"
              placeholder="xxx-xxx-xxxx"
              validation="required|tel"
              :classes="{
                outer: 'mx-5 mt-5 md:w-[250px] lg:w-[250px] sm:w-[100%] ',

                label: 'hidden block mb-1 font-bold text-sm',
                inner:
                  'w-full border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                message: 'text-[#d9534f] mb-1 text-sm',
              }"
            />
          </div>

          <div class="lg:flex md:flex block">
            <FormKit
              type="text"
              validation="required"
              placeholder="Subject"
              label="*Subject"
              :classes="{
                outer: 'mx-5 mt-5 md:w-[250px] lg:w-[450px] sm:w-[106%]',

                label: 'hidden block mb-1 font-bold text-sm',
                inner:
                  'w-full sm:w-[90%] md:w-[100%] border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full h-14 px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                message: 'text-[#d9534f] mb-1 text-sm',
              }"
            />
          </div>
          <div class="flex md:flex block">
            <FormKit
              type="textarea"
              label="*Message"
              placeholder="Message"
              validation="required"
              rows="4"
              cols="50"
              :classes="{
                outer: 'mx-5 mt-10 w-full',
                label: 'hidden block mb-1 font-bold text-sm',
                inner:
                  'md:w-[100%] sm:w-[100%] border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
                input:
                  'w-full  px-3 border-none text-md text-gray-700 placeholder:text-black-200 placeholder:text-[16px]',
                message: 'text-[#d9534f] mb-1 text-sm',
              }"
            />
          </div>
          <FormKit
            type="submit"
            label="Send Message"
            :classes="{
              outer:
                'mx-5 mt-10 w-[150px] border-2 border-[#2A2A5E] bg-[#2A2A5E]',
              label: 'hidden block mb-1 font-bold text-sm',
              inner:
                'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden hover:border-blue-500 ',
              input:
                'w-full h-14 px-3 border-none text-md text-[white] placeholder:text-black-200 placeholder:text-[18px]',
            }"
          />
        </FormKit>
      </div>
    </div>
  </div>
  <div></div>
</template>
