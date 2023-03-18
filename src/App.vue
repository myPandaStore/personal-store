<script setup>
// @ts-nocheck
import { onMounted } from "vue";
import { homeStore } from "@/stores/home.ts";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const useHomeStore = homeStore();
onMounted(() => {
  useHomeStore.getCategoryList();
});
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer v-show="$route.meta.show" />
</template>

<style>
body {
  font: 12px/1.3 "Microsoft YaHei", Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
  min-width: 1380px;
}
</style>
