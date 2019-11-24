<template>
  <div id="test">
    <div class="scroll">
      <video :src="videoUrl" show-mute-btn webkit-playsinline controls class="vid"></video>
      <div class="title">{{title}}</div>
      <user-contend :users="users" />
    </div>
    <div class="my-form">
      <div class="user">
        <input placeholder="您的名字" @input="getName" class="in" />
        <input placeholder="填写评论" @input="getContend" class="in" />
      </div>
      <input type="button" value="提交" class="sumit" @click="sumit" />
    </div>
  </div>
</template>

<script lang="ts" src="./videoPage.ts"></script>

<style scoped>
.scroll {
  height: 90vh;
  width: 750rpx;
  overflow-y: scroll;
  /* background-color: rgb(240, 240, 240) */
}
.vid {
  width: 750rpx;
  height: 500rpx;
  display: block;
  margin: auto;
}
.title {
  text-align: center;
  padding: 10rpx;
  font-size: 40rpx;
  font-weight: bolder;
  word-wrap: break-word;
}
.my-form {
  width: 750rpx;
  display: flex;
  position: absolute;
  bottom: 0rpx;
  /* float: left; */
  /* background-color: blueviolet; */
}
.user {
  display: flex;
  flex-direction: column;
  float: left;
  width: 550rpx;
  height: 10vh;
  /* background-color: aqua; */
}
.in {
  height: 5vh;
  font-size: 35rpx;
  border: 2rpx #cccccc solid;
}
.sumit {
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 200rpx;
  height: 10vh;
  border-radius: 0;
  background-color: dodgerblue;
  color: white;
  font-size: 40rpx;
}
</style>