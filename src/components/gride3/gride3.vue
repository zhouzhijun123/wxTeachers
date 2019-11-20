<!-- grids3.vue -->
<template>
  <div class="grids">
    <div v-for="(img, idx) in imgs" :key="idx" class="grids-cell">
      <a :href="img.destUrl" class="grids-link">
        <img :src="img.url" mode="widthFix" class="grids-cell-icon" />
        <div class="grids-cell-label">{{img.text}}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" src="./gride3.ts"></script>


<style scoped>
.grids {
  margin: 25rpx;
  display: flex;
  flex-wrap: wrap;
  width: 700rpx;
  /* background-color: aqua; */
}

.grids-cell {
  position: relative;
  margin: 16rpx;
  width: 300rpx;
  text-decoration: none;
  display: flex;
  border: 5px solid #fff;
  box-shadow: 1px 1px 5px #333;
  /* -webkit-box-shadow: 1px 1px 5px #333;
  -moz-box-shadow: 1px 1px 5px #333; */

  /* background-color: #c9250c; */
}

.grids-link {
    width: 100%;
    height: 100%;
    /* background-color: aliceblue; */
}

.grids-cell-icon {
  width: 100%;
  height: 100%;
  display: block;
}

.grids-cell-label {
  position: absolute;
  bottom: 0rpx;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  height: 50rpx;
  font-size: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>