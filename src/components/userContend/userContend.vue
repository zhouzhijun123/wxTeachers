<template>
  <div>
    <div class="contend-title">
      <img src="/static/images/coffee.png" class="title-img" />
      <div class="title-text">{{title_text}}</div>
    </div>
    <div v-for="(user, idx) in users" :key="idx" class="users">
      <img :src="user.userIcon" class="user-icon" />
      <div class="contend-container">
        <div class="name-date">
          <span class="user-name">{{user.name}}</span>
          <span>{{user.date}}</span>
        </div>
        <div class="user-contend">{{user.contend}}</div>
      </div>
    </div>
    <form @submit="submit">
      <div class="contend-title">
        <img src="/static/images/comment.png" class="title-img" />
        <div class="title-text">{{contend_text}}</div>
      </div>
      <textarea
        placeholder="请输入您的评论^_^"
        maxlength="50"
        cursor-spacing="30"
        name="textarea"
        class="contend-textarea"
      ></textarea>
      <div class="submit-display">
        <div class="submit-tip">{{tip}}</div>
        <button
          class="submit-btn"
          type="primary"
          size="mini"
          plain="false"
          form-type="submit"
          open-type="getUserInfo"
          lang="zh_CN"
          @getuserinfo="onGetUserInfo"
        >{{submit_text}}</button>
      </div>
    </form>
    <div v-if="contend">表单数据：{{contend}}</div>
  </div>
</template>

<script lang="ts" src="./userContend.ts"></script>

<style scoped>
.contend-title {
  display: flex;
  margin-top: 26rpx;
}
.title-img {
  height: 60rpx;
  width: 60rpx;
  margin-left: 20rpx;
}
.title-text {
  display: flex;
  color: #3f9f94;
  font-size: 38rpx;
  line-height: 60rpx;
  margin-left: 10rpx;
}
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
  /* background-color: purple; */
}
.user-icon {
  width: 90rpx;
  height: 90rpx;
  margin-right: 16rpx;
  float: left;
  border-radius: 50%;
}
.contend-container {
  width: 600rpx;
  /* margin: 10rpx; */
  float: left;
  /* background-color: blue; */
}
.name-date {
  display: flex;
  font-size: 24rpx;
  color: #8e8e8e;
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
.contend-textarea {
  box-sizing: border-box;
  position: relative;
  margin: 16rpx auto 2rpx auto;
  overflow: hidden;
  width: 700rpx;
  height: 220rpx;
  border: 1px #dadada dashed;
  /* border-style: none none dashed none; */
}
.submit-display {
  display: flex;
  margin: 5rpx auto 5rpx auto;
  width: 700rpx;
}
.submit-tip {
  width: 550rpx;
  font-size: 22rpx;
  height: 72rpx;
  line-height: 100rpx;
  margin: 2rpx auto 2rpx auto;
}
.submit-btn {
  width: 150rpx;
  height: 65rpx;
  margin: 2rpx auto 2rpx auto;
}
</style>