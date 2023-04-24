<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "index",
  components: {
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
  destroyed() {},
});
</script>

<template>
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">
<!-- use tailwindcss -->
<div class="flex flex-col h-screen">
  <!-- 表題 -->
    <div class="flex flex-row justify-between items-center bg-gray-200">
        <div class="flex my-12">
            <h1 class="text-2xl font-bold ml-8">AkariSpecification</h1>
        </div>
    </div>
    <!-- メイン 単一ページ -->
    <h1 class="text-2xl font-bold ml-8">Our website is currently under construction. Please come back again. </h1>
    <div class="flex">
        <div class="flex flex-col w-full h-screen bg-gray-white">
            <div class="flex flex-col">
                <div class="flex flex-row justify-between items-center h-16 bg-gray-white">
                    <div class="flex">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<style lang="scss" scoped>
  * {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
</style>
