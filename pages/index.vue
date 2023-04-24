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
    <div class="flex flex-row justify-between items-center h-16 bg-gray-200">
        <div class="flex">
            <h1 class="text-2xl font-bold ml-8">AkariSpecification</h1>
        </div>
    </div>
    <!-- メイン 単一ページ -->

</div>
</template>
<style lang="scss" scoped>
  * {
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
</style>
