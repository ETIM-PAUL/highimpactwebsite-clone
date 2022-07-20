<script setup>
import IconFacebook from "../components/icons/IconFacebook.vue";
import IconTwitter from "../components/icons/IconTwitter.vue";
import IconLinkein from "../components/icons/IconLinkein.vue";
import IconYoutube from "../components/icons/IconYoutube.vue";
import { link } from "../main";
</script>

<template>
  <div class="bg-[#2A2A5E]">
    <section class="py-10 px-5">
      <div class="sm:flex flex-wrap block">
        <div
          class="w-full p-2 rounded justify-between md:justify-center lg:w-1/4 w-1/2 block sm:flex"
        >
          <div>
            <h1 class="uppercase text-white font-bold">company</h1>
            <ul class="pt-8 text-white block">
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('about')"
                v-bind:class="link.link === 'about' ? 'active-footer' : null"
              >
                <RouterLink to="/about-us">About Us</RouterLink>
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('resources')"
                v-bind:class="
                  link.link === 'resources' ? 'active-footer' : null
                "
              >
                <RouterLink to="/resources">Resources</RouterLink>
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('contact')"
                v-bind:class="link.link === 'contact' ? 'active-footer' : null"
              >
                <RouterLink to="/contact-us">Contact Us</RouterLink>
              </li>
              <li class="mb-3 hover:text-[#ff6900] cursor-pointer">
                Terms of Use
              </li>
              <li class="mb-3 hover:text-[#ff6900] cursor-pointer">Privacy</li>
            </ul>
          </div>
        </div>
        <div
          class="w-full p-2 rounded justify-between md:justify-center lg:w-1/4 w-1/2 block sm:flex"
        >
          <div>
            <h1 class="uppercase text-white font-bold">our services</h1>
            <ul class="pt-8 text-white">
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('bizTrans')"
                v-bind:class="link.link === 'bizTrans' ? 'active-footer' : null"
              >
                <RouterLink to="/business-transformation">
                  Business Transformation
                </RouterLink>
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('exeEdu')"
                v-bind:class="link.link === 'exeEdu' ? 'active-footer' : null"
              >
                <RouterLink to="/executive-education"
                  >Executive Education</RouterLink
                >
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('branding')"
                v-bind:class="link.link === 'branding' ? 'active-footer' : null"
              >
                <RouterLink to="/cv-services">Personal Branding</RouterLink>
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('recruit')"
                v-bind:class="link.link === 'recruit' ? 'active-footer' : null"
              >
                <RouterLink to="/recruitment-for-employers"
                  >Recruitment for Employers</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-full p-2 rounded justify-between md:justify-center lg:w-1/4 w-1/2 block sm:flex md:pl-20 lg:pl-0"
        >
          <div>
            <h1 class="uppercase text-white font-bold">courses</h1>
            <ul class="pt-8 text-white">
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('agile')"
                v-bind:class="link.link === 'agile' ? 'active-footer' : null"
              >
                <RouterLink to="/agile-fundamentals"
                  >Agile Fundamentals</RouterLink
                >
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('bizAna')"
                v-bind:class="link.link === 'bizAna' ? 'active-footer' : null"
              >
                <RouterLink to="/business-analysis"
                  >Business Analysis</RouterLink
                >
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('cyber')"
                v-bind:class="link.link === 'cyber' ? 'active-footer' : null"
              >
                <RouterLink to="/technology-and-cyber-security"
                  >Cyber Security</RouterLink
                >
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('dataAna')"
                v-bind:class="link.link === 'dataAna' ? 'active-footer' : null"
              >
                <RouterLink to="/data-analysis">Data Analysis</RouterLink>
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('digital')"
                v-bind:class="link.link === 'digital' ? 'active-footer' : null"
              >
                <RouterLink to="/digital-marketing"
                  >Digital Marketing</RouterLink
                >
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('prodMan')"
                v-bind:class="link.link === 'prodMan' ? 'active-footer' : null"
              >
                <RouterLink to="/product-management"
                  >Product Management</RouterLink
                >
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('proMan')"
                v-bind:class="link.link === 'proMan' ? 'active-footer' : null"
              >
                <RouterLink to="/project-management"
                  >Project Management</RouterLink
                >
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('soft')"
                v-bind:class="link.link === 'soft' ? 'active-footer' : null"
              >
                <RouterLink to="/software-engineering"
                  >Software Engineering</RouterLink
                >
              </li>
              <li
                class="mb-3 hover:text-[#ff6900] cursor-pointer"
                @click="link.setLink('user')"
                v-bind:class="link.link === 'user' ? 'active-footer' : null"
              >
                <RouterLink to="/user-experience">User Experience</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-full p-2 rounded justify-between md:justify-center lg:w-1/4 w-1/2 block sm:flex md:pr-7 lg:pr-0"
        >
          <div>
            <h1 class="uppercase text-white font-bold">social</h1>
            <ul
              class="pt-8 text-white md:flex flex md:justify-around md:gap-4 gap-2"
            >
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
    </section>
  </div>
  <div class="bg-[#1D1D43] p-5">
    <div class="flex marque justify-between">
      <div class="w-1/2 sm:w-full sm:w-[100%]">
        <h1 class="text-white">&#169; High Impact website clown 2022</h1>
      </div>
      <div class="w-1/2 sm:w-full sm:w-[100%]">
        <h1 class="flex text-white">
          Created using &nbsp;
          <svg viewBox="0 0 128 128" class="h-5 mt-2">
            <path
              d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
              fill="none"
            ></path>
            <path
              d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"
              fill="#35495e"
            ></path>
            <path
              d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"
              fill="#41b883"
            ></path>
          </svg>
          &nbsp; , &nbsp;
          <img src="../assets/tailwind-css.svg" class="h-5 mt-2" />
          &nbsp; & &nbsp; Pinia
        </h1>
      </div>
    </div>
  </div>
</template>
