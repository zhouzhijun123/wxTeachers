<template>
  <div>
    <div
      v-for="(cls, idx) in classes"
      :key="idx"
      class="cls-container"
      :style="{backgroundColor: idx%2 == 0? '#eee':'#fff'}"
    >
      <a :href="cls.destUrl+'&users='+cls.users" class="cls-link">
        <div class="detail">{{cls.title}}</div>
        <div class="detail">{{cls.host}}</div>
        <div class="detail">
          直播时间：{{cls.date}}
          <span
            class="state"
            :style="{color: cls.flag == 0 ? '#666': cls.flag == 1 ? 'red': 'green'}"
          >{{state[cls.flag]}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" src="./videoList.ts"></script>

<style scoped>
.cls-container {
  width: 740rpx;
  height: 210rpx;
  padding: 10rpx;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border-bottom: 2rpx solid #aaa;
}
.cls-link {
  height: 100%;
  width: 100%;
  /* background-color: aqua; */
  font-size: 30rpx;
}
.detail {
  height: 70rpx;
  display: flex;
}
.state {
  height: 70rpx;
  padding-left: 10rpx;
  /* background-color: aqua; */
}
</style>