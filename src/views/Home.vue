<template>
  <div class="home">
    <img src="@/assets/ad.jpg" @click="sq">
  </div>
</template>
<script>
export default {
  methods: {
    sq(){
      const appid = 'wx537a4753b9647736';
      const redirect_uri = encodeURIComponent('http://dae.okeyone.cn/pay/product');
      const response_type = 'code';
      const scope = 'snsapi_base'
      const url=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&state=1#wechat_redirect`;
      location.href = url;
    }
  },
  created(){
  }
}
</script>
<style scoped>
.home{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #0c0b10, #16151b);
}
.home img{
  width:100%;
  height: 100%;
  object-fit: contain;
}
.home-btn{
  position: absolute;
  bottom:50px;
  left:50%;
  width: 80%;
  transform: translateX(-50%);
}
</style>
