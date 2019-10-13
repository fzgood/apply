<template>
  <div class="home">
    <img src="@/assets/ad.jpg">
    <button class="button round bg-main text-white home-btn" @click="jumpPage('/product')">宝贝详情</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.home{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;
}
.home img{
  width:100%;
  height: 100%;
  object-fit: cover;
}
.home-btn{
  position: absolute;
  bottom:50px;
  left:50%;
  width: 80%;
  transform: translateX(-50%);
}
</style>