<script lang="ts">
import { defineComponent, ref } from "vue";
import Prism from "@/plugins/prism";

type Infomation = {
  title: string;
  date: string;
  link: string;
  detail: string;
};
type date = {
  infomation: Infomation | null;
};
export default defineComponent({
  name: "index",
  components: {},
  data(): date {
    return {
      infomation: null,
    };
  },
  methods: {},
  computed: {},
  async created() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("X-MICROCMS-API-KEY", "oPpkFOlO4UTAs7pAgGwmcszRKsfMkL0Pg2eS");
    const res = await fetch("https://akarimn.microcms.io/api/v1/akari", {
      method: "GET",
      headers: headers,
    })
    this.infomation = await res.json();
    if (this.infomation) {
      const date = new Date(this.infomation.date);
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hour = ("0" + date.getHours()).slice(-2);
      const minute = ("0" + date.getMinutes()).slice(-2);
      this.infomation.date = `${year}/${month}/${day} ${hour}:${minute}`;
    }
  },
  mounted() {
    Prism.highlightAll();
  },
  destroyed() {},
});
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c"
    rel="stylesheet"
  />
  <div class="w-full h-full">
    <!-- use tailwindcss -->
    <div class="flex flex-col h-screen">
      <!-- 表題 -->
      <div class="flex flex-row justify-between items-center bg-gray-200">
        <div class="flex my-6">
          <img src="~/assets/images/icon.png" class="w-12 h-12 ml-8" />
          <h1 class="text-2xl font-bold ml-4 leading-loose">
            AkariSpecification
          </h1>
        </div>
      </div>
      <div class="md:px-8">
        <!-- メイン 単一ページ -->
        <img
          src="~/assets/images/title.png"
          class="w-1/2 mx-auto my-12 rounded-2xl"
        />
        <!-- Infomation -->
        <h2 class="text-2xl font-bold my-6 mx-4">Infomation</h2>
        <div class="flex flex-col">
          <div class="flex flex-col mx-6">
            <p class="my-2 mx-4">
              <span class="font-bold">Date</span>: {{ infomation?.date }}
            </p>
            <p class="my-2 mx-4">
              <span class="font-bold">Title</span>: {{ infomation?.title }}
            </p>
            <p class="mt-1 mb-0 mx-4">
              <span class="font-bold">Detail</span>:
            </p>
            <span class="ml-4">
            <textarea class="my-2 mx-4 resize-none border-none" readonly="readonly">{{ infomation?.detail }}</textarea>
            </span>
            <p class="my-2 mx-4">
              <span class="font-bold">Link</span>: <a class="text-blue-600 hover:text-blue-500" :href="infomation?.link">{{ infomation?.link }}</a>
            </p>
          </div>
        </div>
        <hr class="fancy-hr px-10" />
        <h2 class="text-2xl font-bold my-6 mx-4">Introduction</h2>
        <div class="flex mx-6">
          <div class="flex flex-col w-full h-screen bg-gray-white w-full">
            <p>
              We are researching way to port Intel x86-64 intrinsic functions to
              RISC-V or ARM.
            </p>
            <p>
              This research is solution to CPU architecture dependency problem.
            </p>
            <p>
              Intel x86-64 is CISC(Complex Instruction Set Computer) and very
              long history.
            </p>
            <p>
              Once the code runs on x86-64 computer it must run forever.So it
              carries a lot of heritage.
            </p>
            <p>
              CISC like Intel is converting CISC variable length instruction to
              RISC like micro code.
            </p>
            <p>So it need converting circuit and die size becomes large.</p>
            <p>
              So there is overhead like consumption of electricity becomes
              large.
            </p>
            <p>
              On the other hand, ARM and RISC-V is same as means of if code runs
              these machine, it must run forever but Instruction Set is simple
              and it can use relatively new technology.
            </p>
            <p>
              But the NO 1 of market share of super computer or PC or server is
              Intel because many Linux application is made for Intel.
            </p>
            <p>
              So if application that runs only on Intel can run on RISC-V or ARM
              by very optimized way,it may be very advantagerous.
            </p>
            <br />
            <p>
              So if we want to run application for Intel x86-64 on RISC-V or ARM
              by very optimized way, it need to port Intel intrinsic function to
              RISC-V or ARM.
            </p>
            <p>the document shown below are very helpful.</p>
            <div
              class="flex flex-row my-6 text-blue-700 w-full break-words break-all"
            >
              <a
                href="https://openpowerfoundation.org/specifications/vectorintrinsicportingguide/"
                ><p>
                  https://openpowerfoundation.org/specifications/vectorintrinsicportingguide/
                </p></a
              >
            </div>
            <p>
              Intel Intrinsic API provide Instruction Set Extension Intel
              continue to provide.
            </p>
            <p>
              SIMD(Single Instruction Stream Multiple Data Stream) is included.
            </p>
            <p>
              To port Intel x86-64 function to RISC-V like IBM POWER takes
              specific wrap structure like below.
            </p>
            <pre
              class="rounded-2xl"
              style="min-height: 160px"
            ><code class="language-c">extern __inline __m128d __attribute__((__gnu_inline__, __always_inline__,__artificial__))
_mm_add_pd (__m128d __A, __m128d __B)
{
   return (__m128d) ((__v2df)__A + (__v2df)__B);
}</code></pre>
            <p>
              _mm_add_pd is Intel Intrinsic function and this function add __A
              and __B.
            </p>
            <p>
              Intel Intrinsic function runs RISC-V like IBM POWER by adding this
              code.
            </p>
            <p>We show other example.</p>
            <pre
              class="rounded-2xl"
              style="min-height: 160px"
            ><code class="language-c">extern __inline __m128d __attribute__((__gnu_inline__, __always_inline__,__artificial__))
_mm_set1_pd (double __F)
{
   return __extension__ (__m128d){ __F, __F };
}</code></pre>
            <p>this copy __F value and store to __m128m by vector format.</p>
            <br />
            <p>
              I am planning to make test framework to content of these wrap
              structure.
            </p>
            <p>These port must be validated and make sure it is correct.</p>
            <p>
              So we input Intel and RISC-V like IBM POWER or ARM the same value
              and make sure output is same.
            </p>
            <!-- Developer -->
            <hr class="fancy-hr px-10" />
            <div class="w-full">
              <h2 class="text-2xl font-bold my-6">Developer</h2>
              <ul class="list-disc list-inside px-2">
                <li class="my-4 break-words break-all">
                  <a
                    href="https://github.com/daisukeokaoss"
                    class="text-blue-600"
                    >Oka Daisuke</a
                  >
                  <p>
                    I name this test framework as Akari. Meaning Light in
                    Japanese.
                  </p>
                  <p>
                    <a
                      class="text-blue-600"
                      href="https://www.slideshare.net/OkaDaisuke/testing-framework-to-port-and-optimize-simd-library-to-open-power-systems"
                      >https://www.slideshare.net/OkaDaisuke/testing-framework-to-port-and-optimize-simd-library-to-open-power-systems</a
                    >
                  </p>
                  <p>I presented OpenPower summit 2021 NA.</p>
                </li>
                <li>
                  <a
                    href="https://github.com/takahashi-akari"
                    class="text-blue-600"
                    >Takahashi Akari</a
                  >
                  <p>
                    I'm a software engineer. I'm interested in programming
                    languages, compilers, and operating systems. I'm also
                    interested in web development and machine learning.
                  </p>
                </li>
              </ul>
            </div>
            <!-- footer -->
            <div class="flex flex-row justify-between items-center bg-white">
              <div class="flex my-12">
                <img src="~/assets/images/icon.png" class="w-12 h-12 ml-8" />
                <h1 class="text-2xl font-bold ml-4 leading-loose">
                  AkariSpecification
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  font-family: "M PLUS Rounded 1c", sans-serif;
}
</style>
