<template>
  <div class="apply">
    <div class="apply-section ">
      <div class="pd15 apply-section__title">商品信息</div>
      <div class="pd15 bg-white apply-section__box flex flex-item-top apply-product">
        <div class="apply-product__thumbnail mr10">
          <div class="goods-thumbnail">
            <img src="@/assets/product.jpg" />
          </div>
        </div>
        <div class="flex-item">
          <div class="apply-product__name">16#滑轮 BW235</div>
          <div class="mt5 apply-product__intro">门滑轮-地滑轮-15MM 轮子-单论 长93CM高22CM宽15CM</div>
          <div class="mt10 flex flex-item-center">
            <div class="flex-item apply-product__price">￥{{price}}</div>
            <div class="flex flex-item-center number">
              <div class="number-jisuan number-jian" @click="bindJian"></div>
              <input class="flex-item text-center" type="text" v-model="number" @input="bindInput">
              <div class="number-jisuan number-jia" @click="bindJia"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="pd15 bg-white flex flex-item-center apply-total">
        <div class="flex-item apply-totle__name">合计</div>
        <div class="apply-totle__price" v-text="totalPrice"></div>
      </div>
    </div>
    <div class="apply-section">
      <div class="pd15 apply-section__title">地址填写</div>
      <div class=" bg-white apply-section__box">
        <div class=" flex flex-item-center apply-group">
          <div class="apply-group__name mr15">联系姓名</div>
          <div class="apply-group__value flex-item" >
            <input type="text" placeholder="李XX" v-model="contact">
          </div>
        </div>
        <div class=" flex flex-item-center apply-group">
          <div class="apply-group__name mr15">联系电话</div>
          <div class="apply-group__value flex-item" >
            <input type="text" placeholder="138XX138XXX" v-model="contactNo">
          </div>
        </div>
        <div class=" flex flex-item-center apply-group">
          <div class="apply-group__name mr15">收货地址</div>
          <div class="apply-group__value flex-item" >
            <input type="text" placeholder="广东省深圳市福田区XXX街道XXX楼" v-model="address">
          </div>
        </div><div class=" flex  apply-group">
          <div class="apply-group__name mr15">备注信息</div>
          <div class="apply-group__value flex-item" >
            <textarea placeholder="易碎品，轻拿轻放"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="pd15 mt15">
      <button class="button bg-main line-main text-white round button--full " @click="pay">微信在线支付</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'apply',
  data(){
    return {
      number: 1,
      wxPay: null,
      price: 0.01,
      contact: '',
      contactNo: '',
      address:''
    }
  },
  computed: {
    totalPrice(){
      return (this.price*100)*this.number/100
    }
  },
  methods: {
    bindJian(){
      if(this.number>1){
        --this.number
      }
    },
    bindJia(){
      ++this.number
    },
    bindInput(){
      if(this.number !='' && this.number == 0 || this.number<0){
        this.number = 1
      }else if(isNaN(Number(this.number))){
        this.number = 1
      }
    },
    createOrder(){
      return new Promise((resolve, reject)=>{
        this.$axios.post(apiUrl+'/mp/order/createOrder', {
          'channelNo':'1',
          'userId':'b75d16582f0b41fc8cd993c390c26433',
          'goodsId':'c01d92293f53477aa30a155746d3dec9',
          'goodsPrice': this.price,
          'goodsNum': this.number,
          'contact': this.contact,
          'contactNo': this.contactNo,
          'address':this.address
        }).then(res=>{
          resolve(res.data)
        })
      })
    },
    pay(){
      this.createOrder().then((res)=>{
        this.$axios.get(apiUrl+'/mp/order/pay/'+res.msg).then(res=>{
          const wxPayMpOrderResult = res.data.data.wxPayMpOrderResult;
          this.wxPay = wxPayMpOrderResult;
          this.toPay(wxPayMpOrderResult);
        })
      })
    },
    toPay(wxPay){
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
           "appId":wxPay.appId,
           "timeStamp":wxPay.timeStamp,
           "nonceStr":wxPay.nonceStr,
           "package":wxPay.packageValue,
           "signType":wxPay.signType,
           "paySign":wxPay.paySign,
        },
        function(res){
          if(res.err_msg == "get_brand_wcpay_request:ok" ){
          // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          }
        }
      );
    }
  },
  created(){

  }
}
</script>
<style scoped>
.apply{
  height: 100%;
}
.apply-product__thumbnail{
  width:100px;
  border-radius: 5px;
  overflow: hidden;
}
.apply-product__intro{
  color:#999;
  font-size: 12px;
  line-height: 1.2;
}
.apply-product__price{
  color:var(--secondColor);
  font-weight: bold;
}
.apply-product__number{
  color:#999;
  font-size: 12px;
}
.apply-total{
  font-size: 16px;
  border-top:1px solid var(--borderColor);
}
.apply-totle__price::before{
  content:'￥';
  font-size: 14px;
}
.apply-section__title{
  color:#666;
}
.apply-group{
  padding:10px 15px;
  border-bottom: 1px solid var(--borderColor);
}
.number{
  width: 80px;
  border-radius: 25px;
  border:1px solid var(--mainColor);
  text-align: center;
}
.number-jisuan{
  position: relative;
  width:22px;
  height: 22px;
  border-radius: 50%;
}
.number-jia{
  border-radius: 50%;
  background-color:var(--mainColor);
}

.number-jisuan::before,.number-jisuan::after{
  content:'';
  position: absolute;
  width:50%;
  height: 50%;
  top:50%;
  left:50%;
  background-color: #000;
  transform: translate(-50%, -50%);
}
.number-jisuan::before{
  width:2px;
}
.number-jisuan::after{
  height:2px;
}
.number-jian::before{
  display: none;
}
</style>
