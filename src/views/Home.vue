<template>
  <div class="home">
    <img src="@/assets/ad.jpg" @click="sq">
  </div>
</template>
<script>
const appid = 'wx537a4753b9647736';
const redirect_uri = encodeURIComponent('http://dae.okeyone.cn/pay/');
const response_type = 'code';
const scope = 'snsapi_base'

export default {
  data(){
    return {
      code : '',
    }
  },
  methods: {
    sq(){
      const url=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&state=1#wechat_redirect`;
      location.href = url;
    },
    getQueryString(name) {
      const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      const urlObj=window.location;
      var r =urlObj.href.indexOf('#')>-1? urlObj.hash.split("?")[1].match(reg) : urlObj.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
    },
    setOpenId(callback){
      localStorage.setItem('openId', '');
      setTimeout(()=>{
        callback && callback();
      }, 5000)
    }
  },
  created(){
    this.code = this.getQueryString('code');
    if(this.code){
      var loading = weui.loading('loading');
      this.setOpenId(()=>{
        loading.hide();
        this.jumpPage('/product');
      });
    }
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
