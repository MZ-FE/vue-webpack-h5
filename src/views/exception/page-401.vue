<template>
  <van-nav-bar title="401标题" left-text="返回" left-arrow @click-left="goBack" />

  <van-empty image="network" description="401" />

  <div>
    <van-calendar title="日历" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>
