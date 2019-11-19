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
  width: 710rpx;
  margin: 20rpx;
  display: flex;
  /* background-color: aquamarine; */
}
.user-icon {
  width: 80rpx;
  height: 80rpx;
  float: left;
  border-radius: 2rpx;
}
.contend-container {
  width: 600rpx;
  margin: 10rpx;
  float: left;
  /* background-color: blue; */
}
.user-name {
  width: 500rpx;
  height: 40rpx;
  font-size: 25rpx;
  color: #666;
  /* background-color: aqua; */
}
.user-contend {
  display: flex;
  align-items: center;
  width: 500rpx;
  font-size: 30rpx;
  color: black;
  /* background-color: blueviolet; */
}
</style>