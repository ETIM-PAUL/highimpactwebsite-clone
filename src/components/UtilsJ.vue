<script setup>
import IconBar from "./icons/IconBar.vue";
import IconHide from "./icons/IconHide.vue";
import HeaderItem from "./HeaderItem.vue";
import HeaderNavLink from "./HeaderNavLink.vue";
</script>
<script>
export default {
  props: {
    initialLink: {
      type: String,
      default: "",
    },
  },
  components: {
    HeaderNavLink,
    HeaderItem,
  },
  computed: {
    getLink() {
      return this.initialLink;
    },
  },
  data() {
    return {
      show: false,
      dropdownopen: false,
      dropdownopen2: true,
      dropdownopen3: false,
      dropdownopen4: true,
      href: this.initiaLink,
      isChrome: !!window.chrome && !!window.chrome.webstore,
    };
  },
  methods: {
    greet() {
      let toggle = this.$refs.mobile;
      toggle.classList.toggle("hidden");
      toggle.classList.toggle("toggle-menu");
    },
    showMobileMenu() {
      let toggle = this.$refs.mobileSubMenu;
      toggle.classList.toggle("hidden");
    },
    showMobileMenu2() {
      let toggle = this.$refs.mobileSubMenu2;
      toggle.classList.toggle("hidden");
    },
    dropdown() {
      setTimeout(() => {
        if (this.dropdownopen2 === true) {
          this.dropdownopen = false;
        }
      }, 500);
    },
    dropdown2() {
      setTimeout(() => {
        if (this.dropdownopen4 === true) {
          this.dropdownopen3 = false;
        }
      }, 500);
    },
    coursesDropDown() {
      setTimeout(() => {
        this.dropdownopen3 = true;
      }, 500);
    },
    consultingDropDown() {
      setTimeout(() => {
        this.dropdownopen = true;
      }, 500);
    },
  },
};
</script>

<template>
  <nav
    class="height-css bg-white border-gray-200 md:px-2 py-2 lg:pt-5 my-auto white:bg-gray-800 lg:h-[70px] h-20 contents sm:block"
  >
    <div
      class="md:container flex flex-wrap justify-around items-center m-auto align-center"
    >
      <button
        v-if="!show"
        @click="(show = true), greet()"
        ref="toggleMenu"
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-black-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-black"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <IconBar />
        <span class="sr-only">Open main menu</span>
      </button>
      <button
        v-if="show"
        @click="(show = false), greet()"
        ref="toggleMenu"
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-black-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-black"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <IconHide />
        <span class="sr-only">Open main menu</span>
      </button>
      <a href="/" class="flex items-center">
        <img
          src="./icons/tailwind.config.png"
          class="mr-3 h-10 md:h-[39px] md:pt-3"
          alt="High-Impact-Career -ogo"
        />
      </a>
      <div class="flex items-center md:order-2 md:pb-1">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full lg:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="dropdown"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            src="./icons/user.png"
            alt="user photo"
          />
          <div
            class="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
          >
            <ul
              class="flex flex-col items-center w-full text-base cursor-pointer pt-10"
            >
              <li class="hover:bg-gray-200 py-4 px-6 w-full">Home</li>
              <li class="hover:bg-gray-200 py-4 px-6 w-full">Contact</li>
              <li class="hover:bg-gray-200 py-4 px-6 w-full">Services</li>
              <li class="hover:bg-gray-200 py-4 px-6 w-full">About</li>
            </ul>
          </div>
        </button>
      </div>
      <div
        ref="mobile"
        class="hidden bg-[#fff] justify-around items-center w-full md:flex md:w-auto md:order-1 z-10 align-center"
        id="mobile-menu-2"
      >
        <ul
          ref="ul"
          class="flex md:h-0 w-full flex-col mt-5 md:mb-3 md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium md:hover:cursor-pointer"
        >
          <li
            @mouseover="dropdownopen = false"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-black-900 md:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <a
              href="/about-us"
              class="font-bold text-black block uppercase md:hover:text-sky-300 py-6 md:py-0 px-1"
              >About Us</a
            >
          </li>
          <li
            x-data="{dropownopen:false}"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-black-900 md:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <a
              @click="showMobileMenu2()"
              href="#"
              @mouseover="consultingDropDown()"
              @mouseleave="dropdown()"
              class="font-bold text-black block py-6 md:py-0 px-1 uppercase md:hover:text-sky-300"
              >Consulting
            </a>
            <div
              class="absolute hidden md:block md:top-8 lg:top-14 left-[-55px] z-30 w-[250px] mt-1 bg-[#fff]"
            >
              <div
                :class="{
                  hidden: !dropdownopen,
                  'flex flex-col': dropdownopen,
                }"
                @mouseleave="(dropdownopen = false), (dropdownopen2 = true)"
                @mouseover="dropdownopen2 = false"
              >
                <div class="text-left">
                  <HeaderNavLink href="business-transformation">
                    <template #navItem>Business Transformation</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="executive-education">
                    <template #navItem>Executive Education</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="recruitment-for-employers">
                    <template #navItem>Recruitment for Employers</template>
                  </HeaderNavLink>
                </div>
              </div>
            </div>
          </li>
          <div class="hidden md:hidden" ref="mobileSubMenu2">
            <HeaderItem href="business-transformation">
              <template #item>Business Transformation</template>
            </HeaderItem>
            <HeaderItem href="executive-education">
              <template #item>Executive Education</template>
            </HeaderItem>
            <HeaderItem href="recruitment-for-employers">
              <template #item>Recruitment for Employers</template>
            </HeaderItem>
          </div>
          <li
            x-data="{dropownopen3:false}"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-black-900 md:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <a
              href="#"
              @click="showMobileMenu()"
              @mouseover="coursesDropDown()"
              @mouseleave="dropdown2()"
              class="font-bold text-black block py-6 md:py-0 px-1 uppercase md:hover:text-sky-300"
            >
              Courses
            </a>
            <div
              class="absolute hidden md:block md:top-8 lg:top-14 left-[-55px] z-30 w-[250px] mt-1 bg-[#fff]"
            >
              <div
                :class="{
                  hidden: !dropdownopen3,
                  'flex flex-col': dropdownopen3,
                }"
                @mouseleave="(dropdownopen3 = false), (dropdownopen4 = true)"
                @mouseover="dropdownopen4 = false"
              >
                <div class="text-left">
                  <HeaderNavLink href="agile-fundamentals">
                    <template #navItem>Agile Fundamentals</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="business-analysis">
                    <template #navItem>Business Analysis</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="technology-and-cyber-security">
                    <template #navItem>Cyber Security</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="data-analysis">
                    <template #navItem>Data Analysis</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="digital-marketing">
                    <template #navItem>Digital Marketing</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="product-management">
                    <template #navItem>Product Management</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="project-management">
                    <template #navItem>Project Management</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="software-engineering">
                    <template #navItem>Software Engineering</template>
                  </HeaderNavLink>
                  <HeaderNavLink href="user-experience">
                    <template #navItem>User Experience</template>
                  </HeaderNavLink>
                </div>
              </div>
            </div>
          </li>
          <div class="hidden md:hidden" ref="mobileSubMenu">
            <HeaderItem href="agile-fundamentals">
              <template #item>Agile Fundamentals</template>
            </HeaderItem>
            <HeaderItem href="business-analysis">
              <template #item>Business Analysis</template>
            </HeaderItem>
            <HeaderItem href="technology-and-cyber-security">
              <template #item>Cyber Security</template>
            </HeaderItem>
            <HeaderItem href="data-analysis">
              <template #item>Data Analysis</template>
            </HeaderItem>
            <HeaderItem href="digital-marketing">
              <template #item>Digital Marketing</template>
            </HeaderItem>
            <HeaderItem href="product-management">
              <template #item>Product Management</template>
            </HeaderItem>
            <HeaderItem href="project-management">
              <template #item>Project Management</template>
            </HeaderItem>
            <HeaderItem href="software-engineering">
              <template #item>Software Engineering</template>
            </HeaderItem>
            <HeaderItem href="user-experience">
              <template #item>User Experience</template>
            </HeaderItem>
          </div>
          <li
            @mouseover="(dropdownopen = false), (dropdownopen3 = false)"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-black-900 md:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <a
              href="cv-services"
              class="font-bold text-black block py-6 md:py-0 px-1 uppercase md:hover:text-sky-300"
            >
              Personal Branding
            </a>
          </li>
          <li
            @mouseover="(dropdownopen = false), (dropdownopen3 = false)"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-black-900 md:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <a
              href="/about-us"
              class="font-bold text-black block py-6 md:py-0 px-1 uppercase md:hover:text-sky-300"
            >
              Bootcamp
            </a>
          </li>
          <li
            @mouseover="(dropdownopen = false), (dropdownopen3 = false)"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-black-900 md:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <a
              href="/about-us"
              class="font-bold text-black block py-6 md:py-0 px-1 uppercase md:hover:text-sky-300"
            >
              Resources
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
