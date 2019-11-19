<template>
  <div class="top-container">
    <div class="top-scroll">
      <static-img2 :img="topImg" flag="1" />
      <div v-for="(title, idx) in tabTitles" :key="idx" class="titles-container">
        <div
          :id="idx"
          @click="click"
          :class="{'active':currentIndex == idx}"
          class="title-item"
        >{{title}}</div>
      </div>
      <swiper
        :current="currentIndex"
        @change="slide"
        :style="{height: swiperHeight+'rpx'}"
        duration="800"
      >
        <swiper-item>11111</swiper-item>
        <swiper-item>22222</swiper-item>
        <swiper-item>33333</swiper-item>
      </swiper>
    </div>
    <bottom-text :text="bottomText" bgcolor="rgba(10, 10, 255, 0.8)" />
  </div>
</template>

<script lang="ts" src="./subPlayPage.ts"></script>

<style scoped>
.titles-container {
  float: left;
  width: 33.3333%;
  height: 80rpx;
  border-bottom: 2rpx solid #ccc;
  box-shadow: 0 4rpx 2rpx rgba(193, 193, 193, 0.3);
  /* background-color: aqua; */
}
.title-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35rpx;
  font-weight: bolder;
  color: #434343;
  height: 100%;
  width: 100%;
  /* background-color: pink; */
}
.active {
  color: #3580cd;
  border-bottom: 4rpx solid #3580cd;
}
</style>