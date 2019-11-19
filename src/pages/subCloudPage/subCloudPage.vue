<template>
  <div class="top-container">
    <div class="top-scroll" :style="{backgroundColor: '#eee'}">
        <static-img :img="topImg" bgcolor="rgba(255, 255, 255, 0.8)" fcolor="blue" />
        <gride2 :imgs="imgs" />
    </div>
    <bottom-text :text="bottomText" bgcolor="#999" fcolor="black" />
  </div>
</template>

<script lang="ts" src="./subCloudPage.ts"></script>

<style scoped>
</style>