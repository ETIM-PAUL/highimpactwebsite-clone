<script setup>
import IconBar from "../icons/IconBar.vue";
import IconHide from "../icons/IconHide.vue";
import { storeToRefs } from "pinia";
import { store, euro, link } from "../../main";
import HeaderItem from "./HeaderItem.vue";
import HeaderNavLink from "./HeaderNavLink.vue";
import SideCart from "../SideCart.vue";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
const { itemsTotal } = storeToRefs(store);
</script>

<script>
const cart = ref(null);
const modal = ref(false);
onClickOutside(cart, () => {
  if (modal.value) {
    let toggle = document.querySelector(".cartt");
    let overlay = document.querySelector(".overlayy");
    toggle.classList.add("remove-cart");
    overlay.classList.toggle("overlay");
    toggle.classList.remove("show-cart");
    modal.value = false;
  }
});
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
    SideCart,
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
      link,
    };
  },
  methods: {
    showMenu() {
      let toggle = this.$refs.mobile;
      toggle.classList.toggle("hidden");
      toggle.classList.remove("remove-menu");
      toggle.classList.add("toggle-menu");
    },
    hideMenu() {
      let toggle = this.$refs.mobile;
      setTimeout(() => {
        toggle.classList.toggle("hidden");
      }, 500);
      toggle.classList.add("remove-menu");
      toggle.classList.remove("toggle-menu");
      this.show = false;
    },
    showMobileMenu() {
      let toggle = this.$refs.mobileSubMenu;
      toggle.classList.toggle("hidden");
    },
    showMobileMenu2() {
      let toggle = this.$refs.mobileSubMenu2;
      toggle.classList.toggle("hidden");
    },
    showCart() {
      let toggle = this.$refs.cart;
      let overlay = this.$refs.overlayDiv;
      toggle.classList.remove("remove-cart");
      toggle.classList.add("show-cart");
      toggle.classList.toggle("cart");
      overlay.classList.toggle("overlay");
      modal.value = true;
    },
    hideCart() {
      let overlay = this.$refs.overlayDiv;
      overlay.classList.toggle("overlay");
      let toggle = this.$refs.cart;
      toggle.classList.add("remove-cart");
      modal.value = false;
      toggle.classList.remove("show-cart");
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
    formatTotalPrice() {
      let price = euro(store.itemsTotalPrice).format();
      return price;
    },
  },
};
</script>

<template>
  <div
    ref="cart"
    class="cart cartt absolute w-[330px] sm:w-[350px] bg-white z-30 top-0 h-full"
  >
    <div class="flex justify-end">
      <span
        @click="hideCart()"
        class="hide-cart pr-10 pt-6 text-[30px] text-[#464646] font-bold inline-end cursor-pointer"
        >✕</span
      >
    </div>
    <SideCart @hideCart="hideCart" />
  </div>
  <div ref="overlayDiv" class="overlayy"></div>

  <nav
    ref="overlayDivv"
    class="height-css bg-white border-gray-200 lg:px-2 py-2 lg:pt-[15px] my-auto white:bg-gray-800 lg:h-[70px] h-[60px] sm:block"
  >
    <div
      class="flex flex-wrap lg:justify-around justify-between items-center m-auto align-center"
    >
      <button
        v-if="!show"
        @click="(show = true), showMenu()"
        ref="toggleMenu"
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-black-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-black"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <IconBar />
        <span class="sr-only">Open main menu</span>
      </button>
      <button
        v-if="show"
        @click="hideMenu()"
        ref="toggleMenu"
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-black-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-black"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <IconHide />
        <span class="sr-only">Open main menu</span>
      </button>
      <RouterLink to="/" class="flex items-center">
        <img
          src="../icons/tailwind.config.png"
          @click="link.setLink('home')"
          class="sm:h-[39px] w-[200px] sm:w-[270px] sm:pt-2"
          alt="High-Impact-Career-logo"
        />
      </RouterLink>
      <div class="flex items-center lg:order-2 lg:pb-1">
        <button
          @click="showCart()"
          type="button"
          class="showOverlay flex lg:mr-0 text-lg rounded-full mr-8"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="dropdown"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-[25px] h-8 rounded-lg"
            src="../../assets/cart.svg"
            alt="cart photo"
          />
        </button>
        <span class="cartQty left-[35%] lg:left-[70%]">{{ itemsTotal }}</span>
      </div>

      <div
        ref="mobile"
        class="hidden bg-[#fff] justify-around items-center w-full lg:flex lg:w-auto lg:order-1 z-10 align-center"
        id="mobile-menu-2"
      >
        <ul
          ref="ul"
          class="flex lg:h-0 w-full flex-col mt-5 lg:mb-3 lg:flex-row lg:space-x-9 lg:mt-0 lg:text-sm lg:font-medium lg:hover:cursor-pointer"
        >
          <li
            @mouseover="dropdownopen = false"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-black-900 lg:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <RouterLink
              @click="link.setLink('about'), (show = false), hideMenu()"
              v-bind:class="link.link === 'about' ? 'active' : null"
              to="/about-us"
              name="about"
              class="currentLink font-bold text-black block py-6 lg:py-0 px-1 uppercase lg:hover:text-sky-300"
              >About Us</RouterLink
            >
          </li>
          <li
            x-data="{dropownopen:false}"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-black-900 lg:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <RouterLink
              @click="showMobileMenu2()"
              to="#"
              name="consulting"
              @mouseover="consultingDropDown()"
              @mouseleave="dropdown()"
              class="currentLink font-bold text-black block py-6 lg:py-0 px-1 uppercase lg:hover:text-sky-300"
              >Consulting
            </RouterLink>
            <div
              class="absolute hidden lg:block md:top-8 lg:top-14 left-[-55px] z-30 w-[250px] mt-1 bg-[#fff]"
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
                  <HeaderNavLink to="/business-transformation" name="bizTrans">
                    <template #navItem>Business Transformation</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/executive-education" name="exeEdu">
                    <template #navItem>Executive Education</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/recruitment-for-employers" name="recruit">
                    <template #navItem>Recruitment for Employers</template>
                  </HeaderNavLink>
                </div>
              </div>
            </div>
          </li>
          <div class="hidden lg:hidden" ref="mobileSubMenu2">
            <HeaderItem
              to="/business-transformation"
              name="bizTrans"
              @hideMenu="hideMenu()"
            >
              <template #item>Business Transformation</template>
            </HeaderItem>
            <HeaderItem
              to="/executive-education"
              name="exeEdu"
              @hideMenu="hideMenu()"
            >
              <template #item>Executive Education</template>
            </HeaderItem>
            <HeaderItem
              to="/recruitment-for-employers"
              name="recruit"
              @hideMenu="hideMenu()"
            >
              <template #item>Recruitment for Employers</template>
            </HeaderItem>
          </div>
          <li
            x-data="{dropownopen3:false}"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-black-900 lg:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <RouterLink
              name="courses"
              to="#"
              @click="showMobileMenu()"
              @mouseover="coursesDropDown()"
              @mouseleave="dropdown2()"
              class="currentLink font-bold text-black block py-6 lg:py-0 px-1 uppercase lg:hover:text-sky-300"
            >
              Courses
            </RouterLink>
            <div
              class="absolute hidden lg:block md:top-8 lg:top-14 left-[-55px] z-30 w-[250px] mt-1 bg-[#fff]"
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
                  <HeaderNavLink to="/agile-fundamentals" name="agile">
                    <template #navItem>Agile Fundamentals</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/business-analysis" name="bizAna">
                    <template #navItem>Business Analysis</template>
                  </HeaderNavLink>
                  <HeaderNavLink
                    to="/technology-and-cyber-security"
                    name="cyber"
                  >
                    <template #navItem>Cyber Security</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/data-analysis" name="dataAna">
                    <template #navItem>Data Analysis</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/digital-marketing" name="digital">
                    <template #navItem>Digital Marketing</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/product-management" name="prodMan">
                    <template #navItem>Product Management</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/project-management" name="proMan">
                    <template #navItem>Project Management</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/software-engineering" name="soft">
                    <template #navItem>Software Engineering</template>
                  </HeaderNavLink>
                  <HeaderNavLink to="/user-experience" name="user">
                    <template #navItem>User Experience</template>
                  </HeaderNavLink>
                </div>
              </div>
            </div>
          </li>
          <div class="hidden lg:hidden" ref="mobileSubMenu">
            <HeaderItem
              to="/agile-fundamentals"
              name="agile"
              @hideMenu="hideMenu()"
            >
              <template #item>Agile Fundamentals</template>
            </HeaderItem>
            <HeaderItem
              to="/business-analysis"
              name="bizAna"
              @hideMenu="hideMenu()"
            >
              <template #item>Business Analysis</template>
            </HeaderItem>
            <HeaderItem
              to="/technology-and-cyber-security"
              name="cyber"
              @hideMenu="hideMenu()"
            >
              <template #item>Cyber Security</template>
            </HeaderItem>
            <HeaderItem
              to="/data-analysis"
              name="dataAna"
              @hideMenu="hideMenu()"
            >
              <template #item>Data Analysis</template>
            </HeaderItem>
            <HeaderItem
              to="/digital-marketing"
              name="digital"
              @hideMenu="hideMenu()"
            >
              <template #item>Digital Marketing</template>
            </HeaderItem>
            <HeaderItem
              to="/product-management"
              name="prodMan"
              @hideMenu="hideMenu()"
            >
              <template #item>Product Management</template>
            </HeaderItem>
            <HeaderItem
              to="/project-management"
              name="proMan"
              @hideMenu="hideMenu()"
            >
              <template #item>Project Management</template>
            </HeaderItem>
            <HeaderItem
              to="/software-engineering"
              name="soft"
              @hideMenu="hideMenu()"
            >
              <template #item>Software Engineering</template>
            </HeaderItem>
            <HeaderItem
              to="/user-experience"
              name="user"
              @hideMenu="hideMenu()"
            >
              <template #item>User Experience</template>
            </HeaderItem>
          </div>
          <li
            @mouseover="(dropdownopen = false), (dropdownopen3 = false)"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-black-900 lg:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <RouterLink
              @click="link.setLink('branding'), hideMenu()"
              v-bind:class="link.link === 'branding' ? 'active' : null"
              name="branding"
              to="/cv-services"
              class="currentLink font-bold text-black block py-6 lg:py-0 px-1 uppercase lg:hover:text-sky-300"
            >
              Personal Branding
            </RouterLink>
          </li>
          <li
            @mouseover="(dropdownopen = false), (dropdownopen3 = false)"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-black-900 lg:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <RouterLink
              @click="link.setLink('bootcamp'), hideMenu()"
              name="bootcamp"
              v-bind:class="link.link === 'bootcamp' ? 'active' : null"
              to="/bootcamp"
              class="currentLink font-bold text-black block py-6 lg:py-0 px-1 uppercase lg:hover:text-sky-300"
            >
              Bootcamp
            </RouterLink>
          </li>
          <li
            @mouseover="(dropdownopen = false), (dropdownopen3 = false)"
            class="h-[60px] text-gray-700 text-center border-gray-100 hover:bg-sky-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-700 lg:p-0 dark:text-black-900 lg:dark:hover:text-red dark:hover:bg-sky-100 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-[13px]"
          >
            <RouterLink
              @click="link.setLink('resources'), hideMenu()"
              v-bind:class="link.link === 'resources' ? 'active' : null"
              name="resources"
              to="/resources"
              class="currentLink font-bold text-black block py-5 lg:py-0 px-1 uppercase lg:hover:text-sky-300"
            >
              Resources
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
