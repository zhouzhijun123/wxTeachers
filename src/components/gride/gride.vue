<template>
  <div class="grids">
    <div class="grids-cell" v-for="img in imgs" :key="img.id">
      <navigator :url="img.destUrl" class="grids-link">
        <div class="grids-cell-icon">
          <img :src="img.url" mode="scaleToFill" />
        </div>
        <div class="grids-cell-label">{{img.text}}</div>
      </navigator>
    </div>
  </div>
</template>

<script lang="ts" src="./gride.ts"></script>

<style scoped>
.grids {
  position: relative;
  padding: 10rpx;
}

.grids-cell {
  position: relative;
  float: left;
  width: 30%;
  margin: 12rpx;
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
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 10rpx;
  /* background-color: aqua; */
}

.grids-cell-icon img {
  width: 210rpx;
  height: 160rpx;
}

.grids-cell-label {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  bottom: 0rpx;
  width: 210rpx;
  font-size: 28rpx;
  text-align: center;
}
</style>