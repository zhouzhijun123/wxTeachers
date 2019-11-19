<template>
  <div class="top-container">
    <div class="top-scroll">
      <static-img2 :img="topImg" flag="0" />
      <activity-list :imgs="imgs" flag="1" />
    </div>
    <bottom-text :text="bottomText" bgcolor="rgba(10, 10, 255, 0.8)" />
  </div>
</template>

<script lang="ts" src="./playPage.ts"></script>

<style scoped>

</style>