<script setup lang="ts">
// 导入组件
import AppTopNavVue from "./components/app-topnav.vue";
import AppFooterVue from "./components/app-footer.vue";
import { useRoute } from "vue-router"; // 引入 useRoute

const route = useRoute(); // 获取当前路由
</script>
<script lang="ts">
export default {
  name: "layout",
};
</script>
<template>
  <!-- 顶部通栏组件 -->
  <AppTopNavVue v-if="route.path !== '/login'"></AppTopNavVue>
  <!-- 二级路由出口 -->
  <router-view></router-view>
</template>
<style scoped lang="less">
</style>