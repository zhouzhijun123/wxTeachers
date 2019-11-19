<template>
  <div class="top-container">
    <scroll-view scroll-y="true" class="top-scroll">
      <div class="title">{{title}}</div>
      <video-list :classes="classes" :state="state" />
      <div class="img-container">
        <img :src="binImg" class="bimg" />
      </div>
    </scroll-view>
    <bottom-text :text="bottomText" />
  </div>
</template>

<script lang="ts" src="./classesPage.ts"></script>

<style scoped>
.title {
  font-size: 40rpx;
  font-weight: bold;
  text-align: center;
  margin: 20rpx;
}

.img-container {
  width: 750rpx;
  padding: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blueviolet; */
}
.bimg {
  width: 300rpx;
  height: 300rpx;
}
</style>