<template>
  <div>
    <video :src="videoUrl" show-mute-btn webkit-playsinline controls class="vid"></video>
    <div class="title">{{title}}</div>
    <user-contend
      :users="users"
      :title_text="title_text"
      :tip="tip"
      :contend_text="contend_text"
      :submit_text="submit_text"
    />
  </div>
</template>

<script lang="ts" src="./videoPage.ts"></script>

<style scoped>
/* .scroll {
  height: 100vh;
  width: 750rpx;
  overflow-y: scroll;
  /* background-color: rgb(240, 240, 240) 
} */
.vid {
  width: 750rpx;
  height: 500rpx;
  display: block;
  margin: auto;
}
.title {
  text-align: center;
  padding: 16rpx;
  font-size: 40rpx;
  font-weight: bolder;
  word-wrap: break-word;
}
</style>