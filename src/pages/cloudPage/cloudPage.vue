<template>
  <div class="top-container">
    <div class="top-scroll">
      <static-img :img="topImg" />
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
        <swiper-item>
          <gride :imgs="grideImgs" />
        </swiper-item>
        <swiper-item>
          <activity-list :imgs="imgList1" flag="1" />
        </swiper-item>
        <swiper-item>33333</swiper-item>
        <swiper-item>44444</swiper-item>
      </swiper>
    </div>
    <bottom-text :text="bottomText" bgcolor="#999" fcolor="black" />
  </div>
</template>

<script lang="ts" src="./cloudPage.ts"></script>

<style scoped>
/* Tab 页标题栏样式 */
.titles-container {
  float: left;
  width: 25%;
  height: 80rpx;
  border-bottom: 2rpx solid #ccc;
  box-shadow: 0 4rpx 2rpx rgba(193, 193, 193, 0.3);
  /* background-color: aqua; */
}

/* Tab 页标题样式 */
.title-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35rpx;
  font-weight: bolder;
  color: #434343;
  height: 100%;
  width: 100%;
}

/* 对应 Tab 页激活后样式 */
.active {
  color: #3580cd;
  border-bottom: 4rpx solid #3580cd;
}
</style>