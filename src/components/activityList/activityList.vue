<template>
  <div>
    <div v-for="(img, idx) in imgs" :key="idx" :class="[flag == 1 ? 'list2':'list']">
      <a :href="img.destUrl" class="list-link">
        <img :src="img.url" class="list-img" />
        <div class="detail">{{img.text}}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" src="./activityList.ts"></script>

<style scoped>
.list {
  border-bottom: 2rpx #aaa solid;
  position: relative;
  padding: 20rpx;
  /* background-color: aqua; */
}
.list2 {
  position: relative;
  padding: 20rpx;
  margin-bottom: 6rpx;
  border-bottom: 5rpx solid #ddd;
  /* box-shadow: 0 10rpx 2rpx rgba(193, 193, 193, 0.3); */
}

.list-link {
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  /* background-color: blueviolet; */
}

.list-img {
  width: 280rpx;
  height: 150rpx;
  border-radius: 10rpx;
}

.detail {
  font-size: 40rpx;
  line-height: 50rpx;
  width: 430rpx;
  height: 80rpx;
  color: #666666;
  padding: 0rpx 20rpx 20rpx 20rpx;
  display: -webkit-box;
  word-break: break-word; /*自动换行*/
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal !important;
}
</style>