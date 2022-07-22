<script setup></script>

<template>
  <div class="overlay-color md:h-[650px] lg:h-[650px] h-[500px] object-cover">
    <video
      autoplay
      muted
      loop
      id="myVideo"
      class="md:h-[650px] lg:h-[650px] h-[500px] object-cover opacity-25"
    >
      <source src="../../assets/bgVideo.mp4" type="video/mp4" />
    </video>

    <div
      class="toggle-menu absolute left-16 md:left-36 md:top-44 sm:top-20 top-24 sm:left-24 w-[600] my-auto flex container ..."
    >
      <section>
        <div>
          <h1
            class="text-white font-bold tracking-[-1.3px] leading-[1.3em] text-[25px] sm:text-[40px] w-[75%] text-left inline-block ..."
          >
            Leading EdTech and Career Development Company Building a Pipeline of
            Black and African Tech Talents, Teams, and Organisations.
          </h1>
        </div>
        <div>
          <button
            class="rounded-lg mt-20 border-solid bg-blue border-[#64CDE6] border-2 w-[150px] p-4 text-white hover:text-sky-700 hover:text-black hover:bg-sky-700"
          >
            About Us
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
#myVideo {
  position: relative;
  right: 0;
  bottom: 0;
  min-width: 100%;
}
</style>
