<script setup>
import BootCamp from "../components/BootCamp/BootCamp.vue";
import FirstBoot from "../components/BootCamp/FirstBoot.vue";
</script>
<script>
export default {
  props: {
    href: {
      type: String,
      default: "Joe",
    },
  },
  data() {
    return {
      hreff: "home",
    };
  },
  components: {
    BootCamp,
    FirstBoot,
  },
  computed: {
    getSymbol() {
      return this.showSymbol;
    },
  },
};
</script>
<template>
  <div class="overlay-color">
    <div
      class="absolute lg:left-44 md:left-16 md:top-50 top-52 left-6 sm:left-24 w-[200] my-auto flex container max-w-xll"
    >
      <p class="sm:text-[55px] text-[30px] font-black text-[#fff] absolute">
        VIRTUAL BOOTCAMPS
      </p>
    </div>
  </div>

  <div class="bg-white-700">
    <div class="mt-16">
      <div class="block md:flex lg:w-[80%] m-auto">
        <div class="md:w-1/2 w:full px-3 lg:px-0">
          <div class="">
            <p class="relative text-black text-left leading-[1.5em]">
              <span class="text-black font-black text-2xl"
                >Python for Data Science & Machine Learning</span
              >
            </p>
            <p class="relative text-black flex">
              Python is a programming language widely used by Data Scientists.
              This Summer Bootcamp is for those who want to start a career in
              Data Science and those who want to learn more about using Python
              for Data Science and Machine Learning. The Summer Bootcamp will
              cover the following areas:
            </p>
          </div>
          <p class="relative text-black pt-4 text-left leading-[1.5em]">
            <span class="text-black font-black text-2xl"
              >Python for Data Science</span
            >
          </p>
          <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
            <li>
              Data Types (Numbers, Strings, List, Dictionary, Boolean, Tuples
              and Set)
            </li>
            <li>Comparison Operators</li>
            <li>Loops and Conditional Statement</li>
            <li>Functions and Lambda Expressions</li>
            <li>Key Libraries – NumPy, Pandas, Matplotlib and Seaborn</li>
          </ul>
          <p class="relative text-black pt-4 text-left leading-[1.5em]">
            <span class="text-black font-black text-2xl"
              >Exploratory Data Analysis</span
            >
          </p>
          <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
            <li>NumPy (Numerical Python): Vectors and Matrix</li>
            <li>Pandas: Series and Data Frame</li>
            <li>Data Wrangling</li>

            <li>Data Mining</li>
          </ul>
          <p class="relative text-black pt-4 text-left leading-[1.5em]">
            <span class="text-black font-black text-2xl"
              >Data Visualization</span
            >
          </p>
          <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
            <li class="py-2">
              Matplotlib: Create Static, Animated and Interactive Visualizations
              in Python
            </li>
            <li>Seaborn</li>

            <li>Plotly: The Front End for ML and Data Science Models</li>

            <li>Data Mining</li>
          </ul>
          <p class="relative text-black pt-4 text-left leading-[1.5em]">
            <span class="text-black font-black text-2xl">Machine Learning</span>
          </p>
          <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
            <li>Supervised Machine Learning (Classification and Regression)</li>
            <li>
              Unsupervised Machine Learning (Clustering and Dimensionality
              Reduction)
            </li>
          </ul>
          <p class="relative text-black pt-4 text-left leading-[1.5em]">
            <span class="text-black font-black text-2xl"
              >Frequently Asked Questions (FAQ)</span
            >
          </p>
          <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
            <li>When does the course start? 2nd July 2022</li>

            <li>
              How long is the course? 8 weeks virtual, hands-on and real-time
              interaction
            </li>

            <li>When does the sessions run? Saturdays, 3PM-5:30PM (GMT/WAT)</li>

            <li>
              What platforms will be used? Zoom. You will need a laptop (PC or
              MAC)
            </li>

            <li>When is the deadline for payment? 30th June 2022</li>
          </ul>
        </div>
        <div class="md:w-1/2 w-full px-3 lg:px-0">
          <FirstBoot show="kji">
            <template #level>One-off Full Payment (UK/Europe/Canada)</template>
            <template #price>&#163;400</template>
          </FirstBoot>
          <FirstBoot show="kdkdi">
            <template #level>50% Discount (Nigeria/Rest of Africa))</template>
            <template #price>N150K or 💲250</template>
          </FirstBoot>
        </div>
      </div>
    </div>

    <div class="w-[95%] md:w-[80%] lg:w-[63%] sm:w-[90%] m-auto">
      <div class="mt-24 relative">
        <div class="pt-10">
          <img src="@/assets/webbg.jpg" />
        </div>

        <div class="py-1">
          <p class="relative text-black pt-4 text-left leading-[1.5em]">
            <span class="text-black font-black text-3xl"
              >Benefits of Joining Our 3 Months Virtual Bootcamp</span
            >
          </p>
          <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
            <li class="py-2">
              Training to Increase your Value & Mentoring to Harness your Skills
            </li>

            <li class="py-2">
              Certification to Prepare you for the Journey Ahead
            </li>

            <li class="py-2">3 Months Internship/Work Experience on your CV</li>

            <li class="py-2">
              CV Review & LinkedIn Profile Optimisation (FREE)
            </li>

            <li class="py-2">Job Search & Interview Preparation (FREE)</li>

            <li class="py-2">On the Job Support (1 month) (FREE)</li>
          </ul>
          <p class="relative text-black pt-1 text-left leading-[1.5em]">
            <span class="text-black font-black text-3xl"
              >Why High Impact Careers?</span
            >
          </p>
          <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
            <li class="py-2">
              Experienced Faculty, Dedicated Mentors & Affordable Price
            </li>

            <li class="py-2">
              Leaders in Careers & Personal Development since 2015
            </li>
          </ul>
          <p class="relative text-black pt-1 text-left leading-[1.5em]">
            <span class="text-black font-black text-3xl"
              >Frequently Asked Questions (FAQ)</span
            >
          </p>
          <ul class="text-black gap-16 inline-block list-disc p-4 text-[16px]">
            <li class="py-2">When does the course start? 9th April 2022</li>

            <li class="py-2">
              How long is the course? 10 weeks virtual, hands-on and real-time
              interaction (3 months)
            </li>

            <li class="py-2">
              When does the sessions run? Saturdays, 10AM-12:30PM (GMT/WAT) for
              Project Management, Business Analysis, and Product Management and
              3PM-5:30PM (GMT/WAT) for Data Analysis, User Experience, and Cyber
              Security
            </li>

            <li class="py-2">
              Does the session run during weekdays? Yes, a drop-in session every
              Wednesday from 9PM-10PM (GMT/WAT)
            </li>
            <li class="py-2">What platforms will be used? Zoom</li>
            <li class="py-2">
              What tools do I need to attend the course? You will need your own
              laptop (PC or MAC)
            </li>
            <li class="py-2">
              If I am unable to attend live session on Saturdays, will I be able
              to catch up? Yes. slides and recordings will be provided
            </li>
            <li class="py-2">
              What tools are we going to learn how to use? Confluence, Jira and
              Slack for Product Management, Project Management and Business
              Analysis. Sketch, Figma, Adobe XD, and Mural for User Experience
              (UX). SQL, Power BI and Python for Data Analysis
            </li>
            <li class="py-2">
              What prior qualification do I need? No prior qualification or
              experience required
            </li>
            <li class="py-2">
              Will you provide me with a work reference? Yes. We will provide a
              3 months’ reference
            </li>
            <li class="py-2">
              When is the second instalment of £300 due if I make a part
              payment? 14th May 2022
            </li>
            <li class="py-2">
              Can I join the waiting list for the next Bootcamp in September
              2022? Yes. Send an email to info@highimpactcareers.co.uk
            </li>
            <li class="py-2">
              It is important that you achieve 80% attendance during the
              Bootcamp. This is a compulsory prerequisite for receiving a
              certificate of attendance and a reference from us.
            </li>
          </ul>
        </div>
        <div class="pt-1 mb-10">
          <p class="relative text-black pt-4 text-left leading-[1.5em]">
            <span class="text-black font-black">
              Enrol by selecting appropriate option below. Deadline for
              enrolment is 1st April 2022 (Closed)
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <div class="block lg:flex lg:w-[80%] m-auto">
        <BootCamp href="paymeeent">
          <template #level>Full Payment (UK, Europe, Canada)</template>
          <template #years>One-off Full Payment</template>
          <template #price>550</template>
        </BootCamp>
        <BootCamp href="payment">
          <template #level>Part Payment (UK, Europe, Canada)</template>
          <template #years>2 Instalmental Payments (total £600)</template>
          <template #price>300</template>
        </BootCamp>
      </div>
    </div>
    <div class="my-8">
      <div class="block lg:flex lg:w-[80%] m-auto">
        <BootCamp>
          <template #level>50% Discount (Nigeria)</template>
          <template #years>One-off Full Payment</template>
          <template #price>₦550</template>
        </BootCamp>
        <BootCamp>
          <template #level>50% Discount (Rest of Africa)</template>
          <template #years>One-off Full Payment</template>
          <template #price>💲375</template>
        </BootCamp>
      </div>
    </div>
  </div>
  <div></div>
</template>
