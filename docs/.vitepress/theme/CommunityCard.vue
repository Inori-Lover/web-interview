<script setup lang="ts">
import communityImage from '../../assets/images/static.vue-js.com/b4b71a30-443b-11eb-85f6-6fac77c0c9b3.png'
</script>

<template>
  <aside class="community-card" aria-label="学习交流">
    <div>
      <p class="community-card-title">一起学习，持续积累。</p>
      <p>关注「JS每日一题」，交流面试问题和学习心得。</p>
    </div>
    <img
      :src="communityImage"
      alt="JS每日一题公众号二维码"
      width="112"
      height="112"
      loading="lazy"
    >
  </aside>
</template>
