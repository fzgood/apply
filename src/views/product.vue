<template>
  <div class="flex flex-column detail">
    <div class="flex-item detail-main">
      <div class="detail-loop">
        <img  src="@/assets/product.jpg">
      </div>
      <div class="pd15 bg-white detail-info">
        <div class="flex flex-item-center">
          <div class="flex-item">
            <div class="detail-title">16#滑轮 BW235</div>
            <div class="mt10 flex detail-intro">
              <div class="mr20">上架：3天前</div>
              <div >浏览人数：2488</div>
            </div>
          </div>
          <div class="ml20 detail-share iconfont icon-forwardfill"></div>
        </div>
        <div class="mt10 detail-price">56.78</div>
      </div>
      <div class="mt15  bg-white detail-section">
        <div class="pd15 detail-section__hd">
          <div class="detail-section__title">宝贝详情</div>
        </div>
        <div class=" detail-section__content">
          <img src="@/assets/detail.jpg" />
        </div>
      </div>
    </div>
    <div class=" detail-ft bg-white flex flex-item-center">
      <div class="flex-item detail-ft__box pl15">
        <div class="detail-ft__price">56.78</div>
        <div class="detail-ft__number">已售788件</div>
      </div>
      <!-- <div class=" bg-second text-white line-main detail-ft__btn">加入购物车</div> -->
      <div class=" bg-main text-white line-main detail-ft__btn" @click="jumpPage('/apply')">立即购买</div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      detail: {}
    }
  },
  methods:{
    getDetail(){
      this.$axios.get('http://dae.okeyone.cn/mp/goods/1').then(res=>{
        console.log(res);
      })
    }
  },
  created(){
    this.getDetail();
  }
}
</script>
<style  scoped>
.detail{
  height: 100%;
}
.detail-main{
  overflow-y: auto;
}
.detail-loop img{
  width:100%;
}
.detail-info{
}
.detail-title{
  color:#000;
  font-weight: bold;
  font-size: 16px;
}
.detail-intro{
  color:#666;
  font-size: 12px;
}
.detail-price{
  font-size: 24px;
  color:var(--secondColor);
}
.detail-price::after{
  content:'元';
  font-size: 16px;
}
.detail-share{
  color:#fff;
  width:40px;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  border-radius: 50%;
  background-color:var(--mainColor);
  text-align: center;
}
.detail-section__hd{
  border-bottom:1px solid var(--borderColor);
}
.detail-section__title{
  padding-left:10px;
  font-size: 16px;
  line-height: 1.2;
  border-left:3px solid var(--mainColor);
}
.detail-ft__price{
  color:var(--secondColor);
  font-size: 18px;
  font-weight: bold;
}
.detail-ft__price::before{
  content:'￥';
  font-size: 14px;
}
.detail-ft__number{
  margin-top:2px;
  color:#999;
  font-size: 12px;
}
.detail-ft__btn{
  padding:16px 30px;
}
</style>
