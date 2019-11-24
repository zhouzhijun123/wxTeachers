<template>
  <div>
    <div v-for="(user, idx) in users" :key="idx" class="users">
      <img :src="user.userIcon" class="user-icon" />
      <div class="contend-container">
        <div class="user-name">{{user.name}}</div>
        <div class="user-contend">{{user.contend}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./userContend.ts"></script>

<style scoped>
.users {
  /* width: 710rpx;
  margin: 20rpx;
  display: flex; */
  display: flex;
  width: 720rpx;
  margin: 0 auto;
  margin-top: 16rpx;
  min-height: 0;
  overflow: hidden;
  padding-top: 25rpx;
  padding-bottom: 25rpx;
  border-bottom: 1px dashed #f1f1f1;
}
.user-icon {
  width: 90rpx;
  height: 90rpx;
  margin-right: 10rpx;
  float: left;
  border-radius: 50%;
}
.contend-container {
  width: 600rpx;
  margin: 10rpx;
  float: left;
  /* background-color: blue; */
}
.user-name {
  display: flex;
  margin-right: 20rpx;
  font-size: 26rpx;
  font-weight: 600;
  color: #3f9f94;
  /* background-color: aqua; */
}
.user-contend {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
  font-size: 30rpx;
  color: #6f6f6f;
  /* background-color: blueviolet; */
}
</style>