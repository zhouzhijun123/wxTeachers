<template>
  <div class="top-container">
    <div class="top-scroll">
      <top-scrollImg :imgs="topScrollImgs" />
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
        duration="500"
      >
        <swiper-item>
          <activity-list :imgs="leftImgs" />
        </swiper-item>
        <swiper-item>
          <activityList :imgs="rightImgs" />
        </swiper-item>
      </swiper>
    </div>
    <bottom-text :text="bottomText" />
  </div>
</template>

<script lang="ts" src="./homePage.ts"></script>

<style scoped>
/* Tab 页标题栏样式 */
.titles-container {
  float: left;
  width: 50%;
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
  font-size: 40rpx;
  font-weight: bolder;
  color: #434343;
  height: 100%;
  width: 100%;
}

/* 对应 Tab 页激活后样式 */
.active {
  color: #2b8d00;
  border-bottom: 4rpx solid #2b8d00;
}
</style>