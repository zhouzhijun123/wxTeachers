<template>
  <div class="grids">
    <div class="grids-cell" v-for="img in imgs" :key="img.id">
      <a :href="img.destUrl" class="grids-link">
        <div class="grids-cell-icon">
          <img :src="img.url" mode="scaleToFill" />
        </div>
        <div class="grids-cell-label">{{img.text}}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" src="./gride2.ts"></script>

<style scoped>
.grids {
  position: relative;
  background-color: #eee;
}

.grids-cell {
  position: relative;
  float: left;
  width: 187rpx;
  height: 200rpx;
  margin-bottom: 20rpx;
}

.grids-link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grids-cell-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 153rpx;
  height: 200rpx;
  text-align: center;
  margin-top: 10rpx;
  /* background-color: aqua; */
}

.grids-cell-icon img {
  width: 100%;
  height: 100%;
}

.grids-cell-label {
  position: absolute;
  bottom: -6rpx;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 153rpx;
  height: 40rpx;
  font-size: 28rpx;
  text-align: center;
}
</style>