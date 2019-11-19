<!-- bottomText.vue -->
<template>
  <div>
    <div class="bottom" :style="{color: fcolor, backgroundColor: bgcolor}">{{text}}</div>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./bottomText.ts"></script>
<style scoped>
.bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 94vh;
  height: 6vh;
  width: 750rpx;
  margin: 0;
  font-size: 30rpx;
  font-weight: bold;
}
</style>