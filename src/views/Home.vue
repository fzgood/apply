<template>
  <div class="home">
    <img src="@/assets/ad.jpg" @click="sq">
  </div>
</template>
<script>
const appid = 'wxe953f91a0805a523';
const response_type = 'code';
const scope = 'snsapi_base'
let shopNo = '';
export default {
  data(){
    return {
      code : '',
    }
  },
  methods: {
    sq(){
      const redirect_uri = encodeURIComponent(`${apiUrl}/pay/?shopNo=${shopNo}`);
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
      this.$axios.get(`${apiUrl}/mp/user/${this.code}`).then(res=>{
        if(res.data.code == 0){
          const data = res.data.data;
          localStorage.setItem('openId', data.openid);
          localStorage.setItem('token', data.accessToken);
          callback && callback();
        }
      })
    }
  },
  created(){
    this.code = this.getQueryString('code');
    shopNo = this.getQueryString('shopNo') || 1;
    console.log(shopNo);
    if(this.code){
      var loading = weui.loading('loading');
      this.setOpenId(()=>{
        loading.hide();
        this.jumpPage('/product', {
          id: shopNo
        });
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
