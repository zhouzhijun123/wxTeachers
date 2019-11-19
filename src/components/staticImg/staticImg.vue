<template>
  <div class="img-container">
    <navigator :url="img.destUrl">
      <img :src="img.url" class="top-img" />
      <div class="top-text" :style="{color: fcolor, backgroundColor: bgcolor}">
        <div>{{img.text}}</div>
      </div>
    </navigator>
  </div>
</template>

<script lang="ts" src="./staticImg.ts"></script>

<style scoped>
.img-container {
  position: relative;
  height: 400rpx;
  margin-bottom: 20rpx;
}
.top-img {
  width: 750rpx;
  height: 400rpx;
}
.top-text {
  position: absolute;
  bottom: 0rpx;
  /* background-color: rgba(30, 30, 30, 0.8);
  color: #ffc600; */
  font-size: 40rpx;
  font-weight: bold;
  width: 750rpx;
  height: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
