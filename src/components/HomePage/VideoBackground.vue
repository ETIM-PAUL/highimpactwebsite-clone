<script setup></script>

<template>
  <div>
    <video
      autoplay
      muted
      loop
      id="myVideo"
      class="sm:h-[465px] md:h-[650px] lg:h-[650px] xs:h-[500px] object-cover"
    >
      <source src="../../assets/bgVideo.mp4" type="video/mp4" />
    </video>

    <div
      class="absolute lg:top-56 lg:left-44 md:left-16 md:top-44 sm:top-1 sm:left-24 xs:top-8 w-[200] my-auto flex container ..."
    >
      <section>
        <div>
          <h1
            class="text-white font-bold tracking-[-1.3px] leading-[1.3em] text-5xl w-6/12 text-left inline-block ..."
          >
            Leading EdTech and Career Development Company Building a Pipeline of
            Black and African Tech Talents, Teams, and Organisations.
          </h1>
        </div>
        <div>
          <button
            class="rounded-full mt-20 border-solid bg-blue border-4 w-1/6 p-4 text-white hover:text-sky-700 hover:border-4 hover:text-black hover:bg-sky-700"
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
  /* height: 80%; */
  /* width: 100vmin; */
}
</style>
