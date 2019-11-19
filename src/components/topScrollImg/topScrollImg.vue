<!-- topScrollImg.vue -->
<template>
  <div>
    <swiper
      :autoplay="autoplay"
      :circular="circular"
      :interval="interval"
      :duration="duration"
      :easing-function = "easing_function"
      :previous-margin="previousMargin"
      :next-margin="nextMargin"
      @change="imgChange"
      class="swiperView"
    >
      <swiper-item v-for="(img, idx) in imgs" :key="idx" class="swiperItem">
        <a class="swiperLink" :class="currentIndex == idx ? 'active':'quiet'" :href="img.destUrl">
          <img :src="img.url" mode="widthFix" class="swiperImg"/>
          <div class="livetitle">
            <div class="livetitle_1">直播预告</div>
            <div class="livetitle_2">
              <div class="livetitle_2_sub">
                <text class="livetitle_2_text">{{img.event}}</text>
                <text class="livetitle_2_text">{{img.date}}</text>
              </div>
            </div>
          </div>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script lang="ts" src="./topScrollImg.ts"></script>

<style scoped>
/* swiper 的样式 */
.swiperView {
  width: 750rpx;
  height: 400rpx;
}

/* swiper-item 的样式 */
.swiperItem {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 链接样式 */
.swiperLink {
  margin: 10rpx;
  width: 630rpx;
  color: white;
  text-decoration: none;
  display: block;
  position: relative;
  box-shadow: 0 0 15rpx black;
  border-radius: 20rpx;
}
.active {
  transform: none;
  transition: all 0.2s ease-in 0s;
  border: white 7.5rpx inset
}
.quiet {
  transform: scale(0.8);
  transition: all 0.2s ease 0s;
  border: white 7.5rpx solid;
}

/* 图片样式 */
.swiperImg {
  width: 100%;
  height: 100%;
  display: block;

  border-radius: 20rpx;
}

/* 图片上字的背景样式 */
.livetitle {
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  height: 80rpx;
  bottom: 0;
  width: 100%;
  border-radius: 0 0 20rpx 20rpx;
}
/* 直播预告样式 */
.livetitle_1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 80rpx;
  color: #c9250c;
  font-weight: bolder;
  font-size: 38rpx;
  float: left;
}
/* 右边字样式 */
.livetitle_2 {
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  width: 65%;
  height: 80rpx;
  font-size: 30rpx;
}
.livetitle_2_sub {
  width: 100%;
  padding-right: 15rpx;
  box-sizing: border-box;
}
.livetitle_2_text {
  overflow: hidden;
  text-align: right;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
}
</style>
